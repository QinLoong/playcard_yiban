import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { HttpService } from '../../http/service/impl/http.service'; // 导入自定义的HttpService
import { LoginResponse } from '../dto/sign.dto'; // 导入登录响应数据类型

@Injectable() // 使用NestJS的Injectable装饰器，将该类标记为一个可注入的服务
export class SignApiService {
  private readonly logger = new Logger(); // 创建一个Logger实例，用于记录日志信息

  constructor(private readonly httpService: HttpService) {}

  /**
   * 预请求，先访问一次登录页面
   * @private
   */
  preRequest(indexPageUrl) {
    return this.httpService.getInstance().get(indexPageUrl); // 发送GET请求访问登录页面
  }

}
