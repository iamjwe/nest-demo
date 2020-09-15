import { Request, Response } from 'express';
import { MyLogger } from '../../modules/logger/my-logger.service';
import { ConfigService } from '../../modules/config/config.services';

export function logger(req: Request, res: Response, next: () => any) {
  const logger = new MyLogger(new ConfigService());
  next();
  const code = res.statusCode; // 响应状态码
  // 组装日志信息
  const logFormat = ` >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    Request original url: ${req.originalUrl}
    Method: ${req.method}
    IP: ${req.headers['X-Real-IP '] || req.headers['$remote_addr']}
    Status code: ${code}
    Parmas: ${JSON.stringify(req.params)}
    Query: ${JSON.stringify(req.query)}
    Body: ${JSON.stringify(req.body)} \n  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  `;
  // 根据状态码，进行日志类型区分
  if (code >= 500) {
    logger.error(logFormat,'');
    logger.errorFile(logFormat,'');
  } else if (code >= 400) {
    logger.warn(logFormat);
    logger.warnFile(logFormat);
  } else {
    logger.log(logFormat);
  }
}