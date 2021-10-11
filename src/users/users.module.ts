import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.models";
import {Role} from "../roles/roles.models";
import {UserRoles} from "../roles/user-roles.models";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {Post} from "../posts/posts.model";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports:[SequelizeModule.forFeature([User, Role, UserRoles, Post]), RolesModule,
    forwardRef(()=> AuthModule)],
  exports:[UsersService
  ]
})
export class UsersModule {
}