import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { join } from 'path';
import { AppModule } from './app.module';
import { Request, Response,NextFunction } from 'express';
import { NAVMENU } from './DATA/nav-menu';

async function bootstrap() {

			
	const app = await NestFactory.create<NestExpressApplication>(
		AppModule,
	);
	
	app.useStaticAssets(join(__dirname,  'public'));
	// app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setBaseViewsDir(join(__dirname,  'views'));
	app.setViewEngine('ejs');
	const MODE_APP = 'prod'
 // кэширование статики
	app.use(function (req, res, next) {
		console.log(`process.env.PORT`,process.env.PORT)
		if(MODE_APP==='prod' || MODE_APP ==='staff') {
		if (req.url.match(/^\/static\/(css|js)\/.+/)) {
			res.setHeader('Cache-Control', 'public, max-age=3600'); // cache header
		}
		if (req.url.match(/^\/static\/(img|fonts|media)\/.+/)) {
			res.setHeader('Cache-Control', 'public, max-age=604800'); // cache header
		}
		}
	
		next();
	});

	
	app.use( (req: Request,res: Response,next: NextFunction)=>{
		
			// if(!req.originalUrl.endWith('/'))
		// if(req.originalUrl==='/favicon.ico') {
		// 	return
		// }
		if (req.originalUrl !== `/` && !/\/$|\.|\?\w+=/.test(req.originalUrl)) {
			// stripTrailingSlash
			const REDIRECT_URL: string = normalizeUrl(`${ req.originalUrl}`);
			console.log("REDIRECT_URL____________________",REDIRECT_URL)
			res.redirect(301, REDIRECT_URL);
			
		  } else {
			next()
		  }
		
		// const lang = req.originalUrl.startsWith('/ru/') ? 'ru' : 'uk'
		// const urlList = NAVMENU['ru'].map(el=>el.name)
		// console.log(lang)
		// let arr = req.originalUrl.split('/');
		// arr.pop()
		// arr.shift()
		// if(arr[0]==='ru') {
		// 	if(arr.length==2){
		// 		let obj = urlList.includes(arr[1]);
		// 		console.log('obj',obj)
		// 		if(!obj) {
		// 			res.redirect(301, '/ru/');
		// 		}
		// 		next()
		// 	}
		// 	if(arr.length>2){
		// 		let obj = urlList.includes(arr[1]);
		// 		if(obj) {
		// 			res.redirect(301, `/ru/${obj}/`);
		// 		}
			
		// 	}
		// } else {
		// 	if(arr.length==1){
		// 		let obj = urlList.includes(arr[0]);
		// 		if(!obj) {
		// 			res.redirect(301, '/ru/');
		// 		}
		// 	}
		// }
		// console.log(arr)
		// if(req.originalUrl==='/ru') {
		// 	res.redirect(301, '/ru/');
		// } else if(req.originalUrl==='/home') {
		// 	res.redirect(301, '/home/');
		// } else if(req.originalUrl==='/ru/home') {
		// 	res.redirect(301, '/ru/home/');
		// } else if(req.originalUrl==='/about') {
		// 	res.redirect(301, '/about/');
		// } else if(req.originalUrl==='/ru/about') {
		// 	res.redirect(301, '/ru/about/');
		
		// } else if(req.originalUrl==='/products') {
		// 	res.redirect(301, '/products/');
		// } else if(req.originalUrl==='/ru/products') {
		// 	res.redirect(301, '/ru/products/');
		// } else {
		// 	next()

		// }
		
	});
  // app.use((req, res, next) => {
  //   const test = /\?[^]*\//.test(req.url);
  //   if (req.url.substr(-1) === '/' && req.url.length > 1 && !test)
  //     res.redirect(301, req.url.slice(0, -1));
  //   else
  //     next();
  // });
  	console.log(`Server list on port ${process.env.PORT}` )
  	await app.listen(process.env.PORT);
}
function normalizeUrl(url: string): string {
	const URL: string = `${url}/`.replace(/\/{2,}/g, '/').replace(/:\//, '://');
	return /\?\w+=/.test(URL) ? URL.replace(/\/$/, '') : URL;
}

bootstrap();
// setInterval(()=>{
// 	console.log('tick')
// },3000)
// export function logger(req: Request, res: Response, next: Function) {
//   console.log(`Request...`);
//   if(req.originalUrl =='/ru') res.redirect('ru/')
//   next();
// };