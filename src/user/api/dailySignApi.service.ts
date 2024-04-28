import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { HttpService } from '../../http/service/impl/http.service'; // 导入自定义的HttpService
import { DailySignApiEnum } from '../constant/dailySignApiEnum'; // 导入日常签到API枚举

