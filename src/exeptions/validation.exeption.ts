import {HttpException, HttpStatus} from "@nestjs/common";

export class ValidationExeption extends HttpException{
    messages;
    constructor(responce){
        super(responce, HttpStatus.BAD_REQUEST)
        this.messages = responce
    }

}