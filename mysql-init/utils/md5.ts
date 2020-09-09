import * as crypto  from 'crypto';

// md5通用加密
export function md5(content: string) {
  let md5 = crypto.createHash('md5');
  return md5.update(content).digest('hex');
}

// 密码专用MD5加密
export const encodePassword = (password: string, SECRET_KEY: string) => {
  const str = `password=${password}&key=${SECRET_KEY}`;
  return md5(str);
}