import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MyLogger } from '../../modules/logger/my-logger.service';
import { ConfigService } from '../../modules/config/config.services';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const logger = new MyLogger(new ConfigService());
    const req = context.getArgByIndex(1).req;
    return next.handle().pipe(
      map(data => {
        const logFormat = ` <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    Request original url: ${req.originalUrl}
    Method: ${req.method}
    IP: ${req.ip}
    User: ${JSON.stringify(req.user)}
    Response data:\n ${JSON.stringify(data.data)}
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`;
        logger.logFile(logFormat);
        return data;
      }),
    );
  }
}