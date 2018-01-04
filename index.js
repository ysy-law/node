/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/4.
 */
var server = require('./server');
var router = require('./router');
server.start(router.router);