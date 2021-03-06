import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateRoleDto} from "./dto/create-roles.dto";
import {RolesService} from "./roles.service";

@Controller('roles')
export class RolesController {
    constructor(private roleService :RolesService) {}

    @Post()
    async create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @Get('/:value')
    async createRole(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }

    @Get()
    async getAllRoles() {
        return this.roleService.getAllRoles();
    }
}
