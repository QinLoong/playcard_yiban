import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { ConfigService } from '@nestjs/config'; // 导入NestJS配置服务
import { Cron } from '@nestjs/schedule'; // 导入NestJS Schedule模块中的Cron装饰器
import * as CryptoJS from 'crypto-js/core'; // 导入CryptoJS库，用于解密配置
import 'crypto-js/enc-base64'; // 导入CryptoJS的Base64解码
import * as JSON5 from 'json5'; // 导入JSON5库，用于解析JSON5格式的配置
import { SignConfig } from 'src/index/dto/signConfigDTO'; // 导入签到配置和签到表单数据类型
import { IUserOptions } from 'src/types/interface'; // 导入用户选项接口
import { UtilService } from '../../../http/service/impl/util.service'; // 导入工具服务
import { ApartmentSignService } from '../../../user/service/impl/apartmentSign.service'; // 导入晚归签到服务
import { DailySignService } from '../../../user/service/impl/dailySign.service'; // 导入日常签到服务
import { SignService } from '../../../user/service/sign.service'; // 导入签到服务
import { signForm2DailySignSubmitRequestDTOMapping } from '../../dto/signFormData2DailySignSubmitRequestDTOMapping'; // 导入签到表单数据到请求类型的映射

@Injectable() // 使用NestJS的Injectable装饰器，将该类标记为一个可注入的服务
export class IndexService {
    private readonly logger = new Logger(IndexService.name); // 创建一个Logger实例，用于记录日志信息

    private readonly signConfig: SignConfig = []; // 存储签到配置信息的数组

    private accountData: IUserOptions; // 存储用户选项的数据

    constructor(
        private readonly dailySignService: DailySignService, // 注入日常签到服务
      ) {
       
      }

}