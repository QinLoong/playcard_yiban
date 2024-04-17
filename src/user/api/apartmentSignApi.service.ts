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
