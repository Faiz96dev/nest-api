import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {AuthService} from "./auth.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
      forwardRef(()=> UsersModule),
      JwtModule.register({
          secret : process.env.PRIVATE_SECRET_KEY || 'SECRET',
          signOptions:{
              expiresIn:'24h'
          }
      }),

  ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
