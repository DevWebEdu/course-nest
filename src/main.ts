import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.useGlobalPipes(new ValidationPipe({
   forbidNonWhitelisted: true, // 👈 Lanza error si existe datos excendentes  status -> 400
   transform : true, // en un inicio el body no es igual a una instancia de su dto, esto lo conbierte
   whitelist: true,// 👈 deja pasar los datos excedentes del DTO pero no los muestra
}));
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
