
import { Get, Controller, Render, Res, Req } from '@nestjs/common';
import { Response,Request } from 'express';
import { NAVMENU } from 'src/DATA/nav-menu';

@Controller('')
export class IndexController {
    public page:string = 'index'
    @Get(':lang?')
    @Render('index')
    root(@Res() res: Response,@Req() req: Request) {
      let language = 'uk'
      if(req.params.lang==='ru') {
        language='ru'
      }
      if(!req.params.lang) {
        language = 'uk'
      }

      return {NAVMENU:NAVMENU[language],page:this.page, firstname: 'Hello world! MAIN eugene',lastname:'burlak',language };
    }
}
