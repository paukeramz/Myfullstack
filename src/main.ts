import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: 'http://localhost:3000', // Địa chỉ ReactJS chạy
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Các method mà server cho phép
    credentials: true, // Nếu cần truyền cookies, sessions
  });
  await app.listen(1004);
}
bootstrap();
