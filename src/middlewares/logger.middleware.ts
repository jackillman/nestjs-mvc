import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log("req",req.originalUrl)
    console.log('Request...');
    if(req.originalUrl =='/ru') res.redirect('/ru/')
    next();
  }
}
