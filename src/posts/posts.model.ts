import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.models";
interface PostCreationAttr{
    title:string
    content:string
    userId:number
    image:string
}
@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttr> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    title: string;

    @Column({type: DataType.STRING})
    content: string;

    @ForeignKey(()=>User)
    @Column({type: DataType.NUMBER})
    userId: number

    @Column({type: DataType.STRING})
    image: string;

    @BelongsTo(()=> User)
    author: User
}