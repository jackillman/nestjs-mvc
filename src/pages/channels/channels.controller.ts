
import { Get, Controller, Render, Res, Req, Param, Redirect } from '@nestjs/common';
import { Response,Request } from 'express';
import { NAVMENU } from 'src/DATA/nav-menu';
import * as fs  from 'fs';
@Controller(':lang?/channels')
export class ChannelsController {
    public page:string = 'channels'
    @Get('')
    @Render('channels')
    root(@Res() res: Response,@Req() req: Request) {

      let language = 'uk'
      if(req.params.lang==='ru') {
        language='ru'
      }
      if(!req.params.lang) {
        language = 'uk'
      }

      return {NAVMENU:NAVMENU[language],page:this.page, firstname: 'Hello world! products eugene',lastname:'burlak',language };
    }
    @Get(':id')
  
    @Render('channels')
    getSingleProduct(@Param() params,@Res() res: Response,@Req() req: Request,) {
      
      this.page = params.id;
      const channelsJSON = fs.readFileSync('src/DATA/static/channels.json', 'utf8');
      const urlChannelsListOuter = JSON.parse(channelsJSON).map(el=>el.uri);
    
      const inc = urlChannelsListOuter.find((el)=>el===`/channels/${this.page}`)
      const language: string = req.params.lang==='ru' ? 'ru' : 'uk';

      if(!inc){
        res.redirect(301, language==='uk'? `/channels/`: `/ru/channels/`);
      }

      console.log(`req.originalUrl`,req.originalUrl,this.page)

      return {NAVMENU:NAVMENU[language],page:this.page, firstname: 'Hello world! products eugene',lastname:inc,language };
    }
}