import { Module } from '@nestjs/common';
import { Home } from './home';
import { HomeController } from './home.controller';

@Module({
  controllers: [HomeController],
  providers: [Home],
})
export class HomeModule {}
