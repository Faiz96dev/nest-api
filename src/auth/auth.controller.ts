import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/create-user.dto";


@Controller('auth')
export class AuthController {

    @Post('/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto)

    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto)

    }
}

