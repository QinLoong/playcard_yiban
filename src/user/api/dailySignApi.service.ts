import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { HttpService } from '../../http/service/impl/http.service'; // 导入自定义的HttpService
import { DailySignApiEnum } from '../constant/dailySignApiEnum'; // 导入日常签到API枚举
import * as formurlencoded from 'form-urlencoded'; // 导入form-urlencoded库，用于处理表单数据编码
import {
  DailySignSubmitRequest,
  DailySignSubmitResponse,
  SignLogRequest,
  SignLogResponse,
} from '../dto/dailySignSubmit.dto'; // 导入日常签到提交请求和响应数据类型

@Injectable() // 使用NestJS的Injectable装饰器，将该类标记为一个可注入的服务
export class DailySignApiService {
  private readonly logger = new Logger(); // 创建一个Logger实例，用于记录日志信息

}
