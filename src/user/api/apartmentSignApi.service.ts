import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { HttpService } from 'src/http/service/impl/http.service'; // 导入自定义的HttpService
import { ApartmentSignApiEnum } from '../constant/dailySignApiEnum'; // 导入公寓签到API枚举
import {
  getTaskScopeRequest,
  TaskScopeRequest,
  TaskScopeResponse,
} from '../dto/taskScope.dto'; // 导入任务范围请求和响应数据类型
import {
  SubmitSignRequest,
  SubmitSignResponse,
} from '../dto/apartmentSignSubmit.dto'; // 导入提交签到请求和响应数据类型
import {
  apartmentSignListResponse,
  getApartmentSignListRequest,
} from '../dto/apartmentSignList.dto'; // 导入公寓签到列表响应和获取列表请求数据类型
import * as formurlencoded from 'form-urlencoded'; // 导入form-urlencoded库，用于处理表单数据编码

@Injectable() // 使用NestJS的Injectable装饰器，将该类标记为一个可注入的服务
export class ApartmentSignApiService {
  private readonly logger = new Logger(ApartmentSignApiService.name); // 创建一个Logger实例，用于记录日志信息

  constructor(private readonly httpService: HttpService) {}

  // 获取任务范围
  async getTaskScope(taskId: string) {
    const res = await this.httpService
      .getInstance()
      .get<TaskScopeResponse>(ApartmentSignApiEnum.getTaskScope, {
        params: getTaskScopeRequest({
          task: taskId,
        }),
      });
    return res.data;
  }

  // 提交签到
  async submitSign(param: SubmitSignRequest) {
    const res = await this.httpService
      .getInstance()
      .post<SubmitSignResponse>(
        ApartmentSignApiEnum.submitSign,
        formurlencoded(param), // 将参数编码为form-urlencoded格式
        {
          params: {
            _t_s_: Date.now().toString(),
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
        },
      );
    return res.data;
  }

}

