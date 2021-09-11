import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';

import { AppModule } from './app.module';
import { accessLogStream } from './commons/loggers/rotate.log';
import { ResponseInterceptor } from './commons/interceptors/response.interceptor';
import { ErrorsInterceptor } from './commons/interceptors/errors.interceptor';
import { SwaggerMockup } from './commons/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //? Custom configs

  //# Create logs daily.
  //# See more ./src/commons/loggers
  app.use(morgan('common', { stream: accessLogStream }));

  //# Resonpons and error interceptors.
  //# See more ./src/commons/interceptors
  app.useGlobalInterceptors(new ResponseInterceptor(), new ErrorsInterceptor());

  //# Validation data transfer object
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //# Enable CORS
  app.enableCors();

  //# Custom prefix url to /api
  //# The entry point is localhost:[PORT]/api
  app.setGlobalPrefix('/api');

  //# Documentacion API
  //# See more info ./src/commons/swagger
  SwaggerMockup(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
