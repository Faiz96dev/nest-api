import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.models";
import {Role} from "./roles.models";


@Table({tableName: 'user_roles', createdAt:false, updatedAt:false})
export class UserRoles extends Model<UserRoles> {
    @ForeignKey(()=> Role)
    @Column({type: DataType.INTEGER})
    roleId: number;
    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    userId: number;
}