import * as fs from 'fs';

function writeFileSyncAdd(path, content){
  console.log(path,content);
  try{
    fs.writeFileSync(path, content, { flag : 'a' })
  }catch(e){
    console.log(`write file for add(flag a) error : occured in file ${path},detail:\n ${e.message}`);
  }
}

writeFileSyncAdd('C:\\Users\\22681\\Desktop\\workspace\\user-group\\logs\\+20200915','xxxxxxxxxxxxxxxxxxxxxxxx')