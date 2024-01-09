import { Global, Module } from '@nestjs/common'; // 导入NestJS的Global装饰器和Module装饰器
import { HttpService } from './service/impl/http.service'; // 导入自定义的HttpService
import { UtilService } from './service/impl/util.service'; // 导入自定义的UtilService
@Global() // 使用Global装饰器，将该模块标记为全局模块，可以在整个应用程序中访问其提供的服务
@Module({
    providers: [HttpService, UtilService], // 声明该模块提供的服务，包括HttpService和UtilService
    exports: [HttpService, UtilService], // 声明该模块导出的服务，以便其他模块可以访问它们
})
export class HttpModule { }
