import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { SignService } from '../sign.service'; // 导入SignService
import { ApartmentSignApiEnum } from '../../constant/dailySignApiEnum'; // 导入公寓签到API枚举
import { ApartmentSignApiService } from '../../api/apartmentSignApi.service'; // 导入公寓签到API服务
import { HttpService } from '../../../http/service/impl/http.service'; // 导入HttpService
import { SignApiService } from '../../api/signApi.service'; // 导入登录API服务
import {
  getSubmitSignRequest,
  SubmitSignRequest,
} from '../../dto/apartmentSignSubmit.dto'; // 导入提交晚归签到请求和响应数据类型

@Injectable() // 使用NestJS的Injectable装饰器，将该类标记为一个可注入的服务
export class ApartmentSignService extends SignService {
  private readonly logger = new Logger(ApartmentSignService.name); // 创建一个Logger实例，用于记录日志信息

  protected indexPageUrl = ApartmentSignApiEnum.indexPageUrl; // 公寓签到首页的URL
  protected loginApi = ApartmentSignApiEnum.loginApi; // 公寓签到登录API的URL

}
