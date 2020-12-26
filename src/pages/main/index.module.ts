import { Module } from '@nestjs/common';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';

import { IndexController } from './index.controller';

@Module({
  controllers: [IndexController],
  providers: [],
  imports:[LoggerMiddleware]
})
export class IndexModule {}
