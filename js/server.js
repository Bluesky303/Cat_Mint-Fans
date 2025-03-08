var http = require('http');
var fs = require('fs');
var url = require('url');
var contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain',
    '.json': 'application/json',
    '.xml': 'application/xml',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.svg': 'application/image/svg+xml',
    '.wasm': 'application/wasm'
}

 // 创建服务器

http.createServer( function (request, response) { 
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   var postfix = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   //设置请求的返回头type,content的type类型列表见上面
   response.setHeader("Content-Type", contentType[postfix]);
   //格式必须为 binary 否则会出错
   var content = fs.readFileSync(pathname.substring(1),"binary");   
   response.writeHead(200, "Ok");
   response.write(content,"binary"); //格式必须为 binary，否则会出错
   response.end();
}).listen(8080);

 

// 控制台会输出以下信息

console.log('Server running at http://127.0.0.1:8080/');