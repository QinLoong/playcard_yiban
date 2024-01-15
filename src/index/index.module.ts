import { Module } from '@nestjs/common';
import { HttpModule } from '../http/http.module';
import { UserModule } from '../user/user.module';
import { IndexController } from './controller/index.controller';
import { IndexService } from './service/impl/index.service';
@Module({
    imports: [UserModule, HttpModule],
    controllers: [IndexController],
    providers: [IndexService],
    exports: [IndexService],
})