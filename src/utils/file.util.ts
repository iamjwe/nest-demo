import * as fs from 'fs';

export function dirExistsSync(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

export function readJsonFileSync(path: string) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    return JSON.parse(data);
  } catch (e) {
    throw `read and parse json file error : occured in file ${path},detail:\n ${e.message}`;
  }
}

// 向一个文件中追加内容
export function writeFileSyncAdd(path, content) {
  try {
    fs.writeFileSync(path, content, { flag: 'a' })
  } catch (e) {
    throw `write file for add(flag a) error : occured in file ${path},detail:\n ${e.message}`;
  }
}