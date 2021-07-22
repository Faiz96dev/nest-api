import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.models";
import {UserRoles} from "./user-roles.models";
interface RolesCreationAttr{
    description:string
    value:string
}

@Table({tableName: 'role'})
export class Role extends Model<Role, RolesCreationAttr> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    value: string;
    @Column({type: DataType.STRING, allowNull: false})
    description: string;
    @BelongsToMany(()=> User,() => UserRoles)
    roles: Role[]
}