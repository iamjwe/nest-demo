import * as moment from 'moment';
import { dirExistsSync } from '../utils/file.util';

const devConfig = {
  dirPath: `C:\\Users\\22681\\Desktop\\workspace\\user-group\\logs\\`,
    get logFileName(){
      dirExistsSync(this.dirPath);
      return `${this.dirPath}+${moment().format('YYYYMMDD')}.txt`
    },
    logHeaderFn: (options) => {
      return `level : ${options?.logType}, time : ${moment().format('HH:mm:ss')}`;
    },
}

const prodConfig = {
  dirPath: `C:\\Users\\22681\\Desktop\\workspace\\user-group\\logs\\`,
  get logFileName(){
    dirExistsSync(this.dirPath);
    return `${this.dirPath}+${moment().format('YYYYMMDD')}.txt`
  },
  logHeaderFn: (options) => {
    return `level : ${options?.logType}, time : ${moment().format('HH:mm:ss')}`;
  },
}

const config = process.env.NODE_ENV === 'develop'? devConfig: prodConfig;
export default config;  