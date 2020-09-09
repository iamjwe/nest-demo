import { User } from '../table/user';
import { encodePassword } from '../utils/md5'
import { SECRET_KEY } from '../config/config'

export const initialUsers: User[] = [
  {
    id: 1,
    userName: 'admin',
    password: encodePassword('123456',SECRET_KEY),
    nickName: 'admin',
    openId: '',
    registerType: 'Account',
    email: '',
    phone: '',
    note: '',
    createTime: new Date().getTime() + '',
    isDelete: 0,
    microsoftId: '',
    wechatId: ''
  },
  {
    id: 2,
    userName: 'iamjwe',
    password: encodePassword('123456',SECRET_KEY),
    nickName: 'yasuo',
    openId: '',
    registerType: '',
    email: '',
    phone: '',
    note: '',
    createTime: new Date().getTime() + '',
    isDelete: 0,
    microsoftId: '',
    wechatId: ''
  },
  {
    id: 3,
    userName: 'xianjiehan',
    password: encodePassword('123456',SECRET_KEY),
    nickName: 'tony',
    openId: '',
    registerType: '',
    email: '',
    phone: '',
    note: '',
    createTime: new Date().getTime() + '',
    isDelete: 0,
    microsoftId: '',
    wechatId: ''
  },
]