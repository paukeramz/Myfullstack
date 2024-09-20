import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
require('dotenv').config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  let port = process.env.BACKEND_PORT
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: process.env.FRONTEND_URL, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
    credentials: true, })
  await app.listen(port);
}
bootstrap();