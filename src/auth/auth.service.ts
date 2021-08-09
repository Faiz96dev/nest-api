import {Body, HttpException, Injectable, Post} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'
import {User} from "../users/users.models";

@Injectable()
export class AuthService {

    constructor(private userService:UsersService,
                private jwtService: JwtService) {}
    async login(userDto: CreateUserDto) {

    }

   async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
       if (candidate){
           throw new HttpException('User with this email aleady exist', 400)
       }
       const hasPassword = await bcrypt.hash(userDto.password, 5)
       const user = await this.userService.createUser({...userDto, password:hasPassword})
       return this.generateToken(user)
    }

    async generateToken(user: User){
        const payload = {email: user.email, id:user.id, role:user.roles }
        return{
            token: this.jwtService.sign(payload)
        }
    }
}
