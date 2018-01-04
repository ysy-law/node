/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/4.
 */
/*
Node.js，Stream 有四种流类型：
Readable - 可读操作。
Writable - 可写操作。
Duplex - 可读可写操作.
Transform - 操作被写入数据，然后读出结果。
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
data - 当有数据可读时触发。
end - 没有更多的数据可读时触发。
error - 在接收和写入过程中发生错误时触发。
finish - 所有数据已被写入到底层系统时触发。*/

// 流中读数据
var fs = require('fs');
var data = '';
var readerStream = fs.createReadStream('npm用法.txt');
readerStream.setEncoding('utf8');
readerStream.on('data', function (chunk) {
    data += chunk;
});
readerStream.on('end', function () {
    console.log(data);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('执行完毕！');
// 流中写数据
var dataWrite = '这只是测试流写入';
var writeStream = fs.createWriteStream('teststream.txt');
writeStream.write(dataWrite, 'utf8');
writeStream.end();
writeStream.on('finish', function () {
    console.log('写入完成');
});
writeStream.on('error', function (err) {
   console.log(err.stack);
});
console.log('执行完毕！');

// 管道流
var wStream = fs.createWriteStream('npm用法复制');
readerStream.pipe(wStream);