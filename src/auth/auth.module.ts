import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import {JwtModule, JwtService} from "@nestjs/jwt";

@Module({
  controllers: [AuthController],
  imports:[
      UsersModule,
      JwtModule.register({
        secret : process.env.PRIVATE_SECRET_KEY || 'SECRET',
        signOptions:{
          expiresIn:'24h'
        }
      })
  ]
})
export class AuthModule {}
