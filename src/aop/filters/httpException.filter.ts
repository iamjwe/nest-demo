import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { MyLogger } from '../../modules/logger/my-logger.service';
import { ConfigService } from '../../modules/config/config.services';

@Catch(HttpException)// @Catch()会捕获不经手动抛出的异常(即第一种不作处理的异常)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const logger = new MyLogger(new ConfigService);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Request original url: ${request.originalUrl}
    Method: ${request.method}
    IP: ${request.ip}
    Status code: ${status}
    Response: ${exception.toString()} \n  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    `;

    logger.errorFile(logFormat, '');
    response
      .status(status)
      .json({
        code: status,
        error: exception.message,
        message: `${status >= 500 ? 'Service Error' : 'Client Error'}`,
      });
  }
}
