import { HttpService } from '../../http/service/impl/http.service'; // 导入HttpService
import { IUserOptions } from '../../types/interface'; // 导入用户选项接口
import { SignApiService } from '../api/signApi.service'; // 导入登录API服务
import * as CryptoJS from 'crypto-js/core'; // 导入CryptoJS库
import 'crypto-js/md5'; // 导入MD5哈希算法

// 抽象类 `SignService`，用于处理签到相关操作
export abstract class SignService {
  protected account: string; // 用户账号
  protected password: string; // 用户密码

  protected abstract indexPageUrl: string; // 抽象属性：首页URL
  protected abstract loginApi: string; // 抽象属性：登录API

  constructor(
    protected readonly httpService: HttpService,
    protected readonly signApiService: SignApiService,
  ) {}

  // 获取用户信息
  getUser() {
    return {
      account: this.account, // 用户账号
      password: this.password, // 用户密码
    };
  }

  // 设置用户信息
  setUser(options: IUserOptions) {
    this.account = options.account; // 设置用户账号
    this.password = options.password; // 设置用户密码
  }


}
