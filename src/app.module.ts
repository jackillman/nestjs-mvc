import { Module } from '@nestjs/common';
// import { join } from 'path';
// import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { IndexModule } from './pages/main/index.module';

import { ProductsModule } from './pages/products/products.module';
import { ConfigModule } from '@nestjs/config';
const ENV = process.env.NODE_ENV;
console.log("ENV",ENV)
@Module({
  imports: [HomeModule, AboutModule,IndexModule,ProductsModule, 
  ConfigModule.forRoot({
    // envFilePath: '.env.dev',
    envFilePath: `.env.${process.env.NODE_ENV}`,
    isGlobal: true,
  })
  //    ServeStaticModule.forRoot({
  //   rootPath: join(__dirname, '..', 'static')
  // })
],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {
 
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .forRoutes(IndexModule);
  // }
}
