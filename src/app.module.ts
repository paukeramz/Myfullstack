import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import * as cors from 'cors';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Change to your PostgreSQL username
      password: 'postgres', // Change to your PostgreSQL password
      database: 'postgres', // Ensure that the 'todo_db' exists
      entities: [User],
      synchronize: true, // Automatically sync entities to database, don't use in production
    }),
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      cors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      }),
    ).forRoutes('*');
  }
}
