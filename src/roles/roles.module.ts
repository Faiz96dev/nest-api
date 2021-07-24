import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.models";
import {User} from "../users/users.models";
import {UserRoles} from "./user-roles.models";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports:[SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService]
})
export class RolesModule {}
