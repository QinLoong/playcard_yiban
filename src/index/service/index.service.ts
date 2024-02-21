import { Injectable, Logger } from '@nestjs/common'; // 导入NestJS的Injectable装饰器和Logger
import { Cron } from '@nestjs/schedule'; // 导入NestJS Schedule模块中的Cron装饰器
import { IUserOptions } from 'src/types/interface'; // 导入用户选项接口