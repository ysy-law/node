/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/4.
 */
var http = require('http');
var url = require('url');
function start(route) {
    http.createServer(function (req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log(pathname);
        route(pathname);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello world!');
    }).listen(8888);
    console.log('server begin...');
}
exports.start = start;