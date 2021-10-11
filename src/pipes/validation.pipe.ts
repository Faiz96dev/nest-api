import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import {ValidationExeption} from "../exeptions/validation.exeption";

@Injectable()

export class ValidationPipe implements PipeTransform<any>{
   async transform(value: any, metadata: ArgumentMetadata): Promise <any> {
       const obj = plainToClass(metadata.metatype, value);
       const errors = await validate(obj)
       if (errors.length){

           console.log(errors)
           // let messages = errors.map(err=>{
           //     return `${err.property}`
           // })
           // throw new ValidationExeption('')

       }
       return value
    }
}