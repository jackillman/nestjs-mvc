function childProcessesRun(mode){
    const cron = require('node-cron');
    const fetchRequest = require('node-fetch');
    const fs = require('fs');
    const pathSrc = './src/public/static/DATA';
    const pathDist = './dist/public/static/DATA';
    let host = 'http://localhost:4200';

    switch(mode) {
        case 'local': host= 'http://localhost:4200';
        break;
        case 'dev': host= 'http://localhost:4200';
        break;
        case 'staff': host= 'http://8-lanet-tv-home-frontend.dev.lanet.network';
        break;
        case 'prod': host= 'https://lanet.tv';
        break;
        default: host= 'http://localhost:4200';
    
    }

    // const task0 =  cron.schedule('*/2 * * * *', () => {
    //     let date = new Date();
    //     console.log(`CHILD:[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay() +1} ${date.getHours()}:${date.getMinutes()}]`,'Runing a job at 00:02 at Europe/Kiev timezone');

    //     writePagesJSON(mode);
    //     writeChannelsJSON(mode);
    //   }, {
    //     scheduled: true,
    //     timezone: "Europe/Kiev"
    //   });

    //   task0.start();
      writePagesJSON(mode);
      writeChannelsJSON(mode);

      async function writePagesJSON(mode){

        let pages = await fetchRequest('http://lanet.tv/static/api/pages').then( (res:any)=>res.json());

        let pathSrc = './src/DATA/static';
        let pathDist = './dist/DATA/static';
        fs.mkdir(pathSrc, function (err:any) {
           
            fs.writeFileSync(`${pathSrc}/pages.json`, JSON.stringify(pages) )
            fs.writeFileSync(`${pathDist}/pages.json`, JSON.stringify(pages) )
        })
      }
      async function writeChannelsJSON(mode){

        let channels = await fetchRequest('http://lanet.tv/static/api/channels').then( (res:any)=>res.json());

        let pathSrc = './src/DATA/static';
        let pathDist = './dist/DATA/static';
        fs.mkdir(pathSrc, function (err:any) {
           
            fs.writeFileSync(`${pathSrc}/channels.json`, JSON.stringify(channels) )
            fs.writeFileSync(`${pathDist}/channels.json`, JSON.stringify(channels) )
        })
      }
}
childProcessesRun(process.argv[2]);
