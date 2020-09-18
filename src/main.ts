import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { MyLogger } from './modules/logger/my-logger.service';
import { ConfigService } from './modules/config/config.services';
import { initSwagger } from './common/swagger/swagger';
import { logger } from './aop/middleware/logger.middleware';
import { AllExceptionsFilter } from './aop/filters/allException.filter';
import { HttpExceptionFilter } from './aop/filters/httpException.filter'
import { TransformInterceptor } from './aop/interceptors/transform.interceptor';
import { LoggerInterceptor } from './aop/interceptors/logger.interceptor';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule,{logger: false});
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  app.use(helmet());
  app.enableCors();
  // app.use(csurf()); // csrf 与 swagger不能兼容 
  app.useLogger(new MyLogger(new ConfigService));
  app.use(logger);
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  initSwagger(app);
  await app.listen(3000);
}
bootstrap();
