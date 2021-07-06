import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {UsersController} from "./users/users.controller";
import {UsersService} from "./users/users.service";
import {ConfigModule} from "@nestjs/config";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [SequelizeModule.forRoot({
        dialect: 'postgres' ,
        host: process.env.HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_DB_USER,
        password: process.env.POSTGRES_DB_PASSWORD,
        database: process.env.POSTGRES_DB_NAME,
        models: [],
        autoLoadModels:true
    }),

        ConfigModule.forRoot({envFilePath:`.${process.env.NODE_ENV}.env`}),UsersModule,]
})
export class AppModule {
}