import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { MyLogger } from './modules/logger/my-logger.service';
import { ConfigService } from './modules/config/config.services';
import { initSwagger } from './common/swagger/swagger';
import { logger } from './aop/middleware/logger.middleware'


async function bootstrap() {
  // const app = await NestFactory.create(AppModule,{logger: false});
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));
  app.use(helmet());
  app.enableCors();
  // app.use(csurf()); // csrf 与 swagger不能兼容 
  // app.useLogger(new MyLogger(new ConfigService));
  app.use(logger);
  initSwagger(app);
  await app.listen(3000);
}
bootstrap();
