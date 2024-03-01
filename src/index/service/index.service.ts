import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { Cron } from '@nestjs/schedule'; // 导入NestJS Schedule模块中的Cron装饰器
import { IUserOptions } from 'src/types/interface'; // 导入用户选项接口
import { DailySignService } from '../../../user/service/impl/dailySign.service'; // 导入日常签到服务
import { ConfigService } from '@nestjs/config'; // 导入NestJS配置服务
import * as JSON5 from 'json5'; // 导入JSON5库，用于解析JSON5格式的配置
import * as CryptoJS from 'crypto-js/core'; // 导入CryptoJS库，用于解密配置
import 'crypto-js/enc-base64'; // 导入CryptoJS的Base64解码
import { ApartmentSignService } from '../../../user/service/impl/apartmentSign.service'; // 导入晚归签到服务
import { SignConfig, signFormData } from 'src/index/dto/signConfigDTO'; // 导入签到配置和签到表单数据类型
import { SignService } from '../../../user/service/sign.service'; // 导入签到服务
import { DailySignSubmitRequest } from '../../../user/dto/dailySignSubmit.dto'; // 导入日常签到提交请求类型