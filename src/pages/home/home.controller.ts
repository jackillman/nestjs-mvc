
import { Get, Controller, Render, Res, Req } from '@nestjs/common';
import { Response,Request } from 'express';
import { NAVMENU } from 'src/DATA/nav-menu';
@Controller(':lang?/home')
export class HomeController {
    public page:string = `home`
    @Get('')
    @Render('home')
    root(@Res() res: Response,@Req() req: Request) {
      let language = 'uk'
      if(req.params.lang==='ru') {
        language='ru'
      }
      if(!req.params.lang) {
        language = 'uk'
      }

      return { NAVMENU:NAVMENU[language],page:this.page, firstname: 'Hello world! MAIN eugene',lastname:'burlak',language };
    }
}