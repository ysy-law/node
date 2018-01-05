/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/5.
 */
let http = require('http');
let url = require('url');
let util = require('util');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);