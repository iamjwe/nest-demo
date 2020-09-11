import { Injectable, Inject } from '@nestjs/common';
import { config } from '../../config/config' 

const ConfigProvider = {
  provide: 'CONFIG',
  useValue: config
}

@Injectable()
export class ConfigService {
  get(key: string){
    try{
      let arr = key.split('.');
      let val = config[arr[0]];
      for(let i=1;i<arr.length;i++){
        if(val === undefined){
          throw `val[${arr[i-1]}] is error`
        }
        val = val[arr[i]];
      }
      if(val === undefined){
        throw `val[${arr[arr.length-1]}] is error`
      }
      return val
    }catch(e) {
      throw `get conifg error,see detail:\n ${e.message}`;
    }
  }
}