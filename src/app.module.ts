import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.models";
import {RolesModule} from './roles/roles.module';
import {UserRoles} from "./roles/user-roles.models";
import {Role} from "./roles/roles.models";
import {AuthService} from './auth/auth.service';
import {AuthModule} from './auth/auth.module';
import {JwtModule} from "@nestjs/jwt";
import {ServeStaticModule} from '@nestjs/serve-static';
import {PostsModule} from './posts/posts.module';
import {Post} from "./posts/posts.model";
import {FilesModule} from './files/files.module';
import {join} from 'path';
import * as path from 'path'

@Module({
    controllers: [],
    providers: [AuthService],
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
        }),
        SequelizeModule.forFeature([User]),
        ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`}),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_DB_USER,
            password: process.env.POSTGRES_DB_PASSWORD,
            database: process.env.POSTGRES_DB_NAME,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]
})
export class AppModule {
}