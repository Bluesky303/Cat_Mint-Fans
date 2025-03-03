var http = require('http');

var fs = require('fs');

var url = require('url');

 

 // 创建服务器

http.createServer( function (request, response) { 

   // 解析请求，包括文件名

   var pathname = url.parse(request.url).pathname;

   var postfix = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名

   // 输出请求的文件名

   console.log("Request for " + pathname + " received.");

 

   // 从文件系统中读取请求的文件内容

   fs.readFile(pathname.substr(1), function (err, data) {

      if (err) {

         console.log(err);

        // HTTP 状态码: 404 : NOT FOUND

         // Content Type: text/plain

         response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});

      }else{            

         // HTTP 状态码: 200 : OK

         // Content Type: text/plain

         console.log(postfix);

         if(postfix==='html'){

             response.writeHead(200, {'Content-Type': 'text/html'});   

         }else if(postfix==='css'){

            response.writeHead(200, {'Content-Type': 'text/css'});

         }

         else if(postfix==='js'){

            response.writeHead(200, {'Content-Type': 'application/javascript'});

         }else if(postfix==='jpg'){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            var imageFilePath = pathname.substr(1);
            var stream = fs.createReadStream( imageFilePath );
            var responseData = [];//存储文件流
            if (stream) {//判断状态
                stream.on( 'data', function( chunk ) {
                    responseData.push( chunk );
                });
                stream.on( 'end', function() {
                    var finalData = Buffer.concat( responseData );
                    response.write( finalData );
                    response.end();
                });
            }
         }

         // 响应文件内容

         response.write(data.toString());       

      }

      //  发送响应数据

      response.end();

   });

}).listen(8080);

 

// 控制台会输出以下信息

console.log('Server running at http://127.0.0.1:8080/');