import { Injectable, Inject, Scope } from '@nestjs/common';
import { ConfigService } from '../config/config.services';
import { Logger } from '@nestjs/common';
import { writeFileSyncAdd } from '../../utils/file.util';

// 自定义Logger，可以implement LoggerService，或者直接继承Logger
@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends Logger {
  logConfig;
  logFileName;
  logHeaderFn;
  constructor(private readonly conifgService: ConfigService) {
    super();
    this.logConfig = conifgService.get('logConfig');
    this.logFileName = this.logConfig.logFileName;
    this.logHeaderFn = this.logConfig.logHeaderFn;
  }
  log(message: string) {
    super.log(message);
  }

  logFile(message: string) {
    writeFileSyncAdd(this.logFileName, `${this.logHeaderFn({ logType: 'log' })}\n${message}\n`);
  }

  error(message: string, trace: string) {
    super.error(message, trace);
  }

  errorFile(message: string, trace: string) {
    writeFileSyncAdd(this.logFileName, `${this.logHeaderFn({ logType: 'error' })}\n${message}\n`);
  }

  warn(message: string) {
    super.warn(message);
  }

  warnFile(message: string) {
    writeFileSyncAdd(this.logFileName, `${this.logHeaderFn({ logType: 'warn' })}\n${message}\n`);
  }

  debug(message: string) {
    super.warn(message);
  }

  debugFile(message: string) {
    writeFileSyncAdd(this.logFileName, `${this.logHeaderFn({ logType: 'debug' })}\n${message}\n`);
  }

  verbose(message: string) {
    super.verbose(message);
  }

  verboseFile(message: string) {
    writeFileSyncAdd(this.logFileName, `${this.logHeaderFn({ logType: 'verbose' })}\n${message}\n`);
  }

}