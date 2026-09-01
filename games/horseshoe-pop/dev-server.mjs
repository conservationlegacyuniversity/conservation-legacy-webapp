import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const args=process.argv.slice(2),readArg=(name,fallback)=>{const i=args.indexOf(name);return i>=0?args[i+1]:fallback};
const port=Number(readArg('--port','4173')),host=readArg('--host','0.0.0.0');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png','.webp':'image/webp','.md':'text/markdown; charset=utf-8'};

createServer((request,response)=>{
  const requested=decodeURIComponent((request.url||'/').split('?')[0]);
  const safe=normalize(requested).replace(/^([.][.][/\\])+/,''),file=join(process.cwd(),safe==='/'?'index.html':safe);
  if(!file.startsWith(process.cwd())||!existsSync(file)||!statSync(file).isFile()){response.writeHead(404);response.end('Not found');return}
  response.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
  createReadStream(file).pipe(response);
}).listen(port,host,()=>console.log(`Horse Shoe Pop preview listening on ${host}:${port}`));
