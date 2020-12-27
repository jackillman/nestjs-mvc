// const fetchRequest:any = require('node-fetch');
// const fs = require('fs');

// async function requests() {
//     let packets = await fetchRequest('http://lanet.tv/static/api/packets').then( (res:any)=>res.json());
//     let channels = await fetchRequest('http://lanet.tv/static/api/channels').then( (res:any)=>res.json());
//     let epgchannels = await fetchRequest('http://lanet.tv/static/api/epgchannels').then( (res:any)=>res.json());
//     let formats = await fetchRequest('http://lanet.tv/static/api/formats').then( (res:any)=>res.json());
//     let tags = await fetchRequest('http://lanet.tv/static/api/tags').then( (res:any)=>res.json());
//     let pages = await fetchRequest('http://lanet.tv/static/api/pages').then( (res:any)=>res.json());
  

//     let pathSrc = './src/public/DATA/static';
//     let pathDist = './dist/public/DATA/static';
//     fs.mkdir(pathSrc, function (err:any) {
//         fs.writeFileSync(`${pathSrc}/packets.json`, JSON.stringify(packets) )
//         fs.writeFileSync(`${pathSrc}/channels.json`, JSON.stringify(channels) )
//         fs.writeFileSync(`${pathSrc}/epgchannels.json`, JSON.stringify(epgchannels) )
//         fs.writeFileSync(`${pathSrc}/tags.json`, JSON.stringify(tags) )
//         fs.writeFileSync(`${pathSrc}/pages.json`, JSON.stringify(pages) )

//         fs.writeFileSync(`${pathDist}/packets.json`, JSON.stringify(packets) )
//         fs.writeFileSync(`${pathDist}/channels.json`, JSON.stringify(channels) )
//         fs.writeFileSync(`${pathDist}/epgchannels.json`, JSON.stringify(epgchannels) )
//         fs.writeFileSync(`${pathDist}/tags.json`, JSON.stringify(tags) )
//         fs.writeFileSync(`${pathDist}/pages.json`, JSON.stringify(pages) )

//     })
// }

// requests();
