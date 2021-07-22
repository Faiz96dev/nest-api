import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.models";
import {Role} from "../roles/roles.models";
import {UserRoles} from "../roles/user-roles.models";
import {RolesModule} from "../roles/roles.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule]
})
export class UsersModule {}
