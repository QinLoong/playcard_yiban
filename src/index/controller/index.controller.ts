import { Controller, Get, Logger } from '@nestjs/common'; // 导入NestJS的Controller装饰器、Get装饰器和Logger
import { SchedulerRegistry } from '@nestjs/schedule'; // 导入NestJS Schedule模块中的SchedulerRegistry
import { IndexService } from '../service/impl/index.service'; // 导入自定义的IndexService
@Controller() // 使用Controller装饰器，将该类标记为NestJS的控制器类
export class IndexController {
    private readonly logger = new Logger(IndexController.name); // 创建一个Logger实例，用于记录日志信息
    constructor(
        private readonly appService: IndexService, // 注入IndexService实例，用于处理业务逻辑
        
      ) {}
}