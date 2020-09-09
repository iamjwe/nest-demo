import * as fs from 'fs';

export function readJsonFileSync(path: string){
  try{
    const data = fs.readFileSync(path,{ encoding:'utf8' });
    return JSON.parse(data);
  }catch(e){
    throw `read and parse json file error : occured in file ${path},detail:\n ${e.message}`;
  }
}