import {IsEmail, IsString, Length} from "class-validator";


export class CreateUserDto{
    @IsString({message:'Must be a string'})
    @IsEmail({}, {message: 'should be an email value '})
    readonly email:string;
    @IsString({message:'Must be a string'})
    @Length(4, 16, {message: 'Password should be more then 4 and less 16 symbols '})
    readonly password:string;
}