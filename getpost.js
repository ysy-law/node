/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/5.
 */
/*获取GET请求内容
由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
node.js 中 url 模块中的 parse 函数提供了这个功能。*/

let http = require('http');
let url = require('url');
let util = require('util');
let querystring = require('querystring');
/*http.createServer(function (req, res) {
    // util.inspect(url.parse(req.url, true))
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    let params = url.parse(req.url, true).query;
    res.write('网站名：' + params.name);
    res.write('\n');
    res.write('网站URL' + params.url);
    console.log(req.url);
    res.end();
}).listen(3000);*/

/*获取 POST 请求内容
POST 请求的内容全部的都在请求体中，http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。
比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所以 node.js 默认是不会解析请求体的，当你需要的时候，需要手动来做。*/

let postHTML = `
    <html>
        <head>
            <meta charset="UTF-8" />
            <title>post测试</title>
        </head>
        <body>
            <form method="post">
                网站名：<input name="name" /><br />
                网站url: <input name="url" /><br />
                <button type="submit">提交</button>
            </form>
        </body>
    </html>`;
http.createServer(function (req, res) {
    let body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        body = querystring.parse(body);
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
        if(body.name && body.url){
            res.write('网站名：' + body.name);
            res.write('\n');
            res.write('网站URL：' + body.url)
        }else {
            res.write(postHTML);
        }
    });
}).listen(3000);





