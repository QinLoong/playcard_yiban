import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { HttpService } from 'src/http/service/impl/http.service'; // 导入自定义的HttpService
import { ApartmentSignApiEnum } from '../constant/dailySignApiEnum'; // 导入公寓签到API枚举
