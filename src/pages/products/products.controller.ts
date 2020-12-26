
import { Get, Controller, Render, Res, Req, Param, Redirect } from '@nestjs/common';
import { Response,Request } from 'express';
import { NAVMENU } from 'src/DATA/nav-menu';
@Controller(':lang?/products')
export class ProductsController {
    public page:string = 'products'
    @Get('')
    @Render('products')
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
  
    @Render('products')
    getSingleProduct(@Param() params,@Res() res: Response,@Req() req: Request,) {

      this.page = params.id;
      console.log(`req.originalUrl`,req.originalUrl)
      if(!this.page.endsWith('/')) {
        console.log(`this.page`,this.page)
        res.redirect(301, `${this.page}/`);
      }
      let language = 'uk'
      if(req.params.lang==='ru') {
        language='ru'
      }
      if(!req.params.lang) {
        language = 'uk'
      }

      return {NAVMENU:NAVMENU[language],page:this.page, firstname: 'Hello world! products eugene',lastname:'burlak',language };
    }
}