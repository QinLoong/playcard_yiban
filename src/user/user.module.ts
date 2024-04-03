import { Module } from '@nestjs/common';
import { DailySignService } from './service/impl/dailySign.service';
import { HttpModule } from '../http/http.module';
import { ApartmentSignService } from './service/impl/apartmentSign.service';