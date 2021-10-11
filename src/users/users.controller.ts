import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {AddRoleDto} from "./dto/add-role.dto";
import {UsersService} from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { BanUserDto } from './dto/ban-use.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    @Roles('ADMIN')
    @UseGuards(RoleGuard)
    getAll() {
        return this.userService.getAllUsers()
    }

    @UseGuards(JwtAuthGuard)
    @Post('/role')
    @Roles('ADMIN')
    @UseGuards(RoleGuard)
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/ban')
    @Roles('ADMIN')
    @UseGuards(RoleGuard)
    banUser(@Body() dto: BanUserDto) {
        return this.userService.banUser(dto)
    }
}
