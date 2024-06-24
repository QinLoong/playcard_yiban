import { HttpService } from '../../http/service/impl/http.service'; // 导入HttpService
import { IUserOptions } from '../../types/interface'; // 导入用户选项接口
import { SignApiService } from '../api/signApi.service'; // 导入登录API服务
import * as CryptoJS from 'crypto-js/core'; // 导入CryptoJS库
import 'crypto-js/md5'; // 导入MD5哈希算法

// 抽象类 `SignService`，用于处理签到相关操作
export abstract class SignService {
  protected account: string; // 用户账号

}
