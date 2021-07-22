import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {UsersController} from "./users/users.controller";
import {UsersService} from "./users/users.service";
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.models";
import {RolesModule} from './roles/roles.module';
import {UserRoles} from "./roles/user-roles.models";
import {Role} from "./roles/roles.models";
import {RolesController} from "./roles/roles.controller";
import {RolesService} from "./roles/roles.service";
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    providers: [AuthService],
    imports: [
        SequelizeModule.forFeature([User]),
        ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`}),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_DB_USER,
            password: process.env.POSTGRES_DB_PASSWORD,
            database: process.env.POSTGRES_DB_NAME,
            models: [User, Role, UserRoles],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
    ]
})
export class AppModule {
}