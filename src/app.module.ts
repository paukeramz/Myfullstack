import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import * as cors from 'cors';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_DATABASE, 
      entities: [User],
      schema:process.env.DB_SCHEMA,
      synchronize: true, 
    }),
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      cors({
        origin: process.env.FRONTEND_URL,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      }),
    ).forRoutes('*');
  }
}