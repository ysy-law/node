/*打开文件
语法
以下为在异步模式下打开文件的语法格式：
fs.open(path, flags[, mode], callback)
参数
参数使用说明如下：
path - 文件的路径。
flags - 文件打开的行为。具体值详见下文。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。
flags 参数可以是以下值：
Flag	描述
r	以读取模式打开文件。如果文件不存在抛出异常。
r+	以读写模式打开文件。如果文件不存在抛出异常。
rs	以同步的方式读取文件。
rs+	以同步的方式读取和写入文件。
w	以写入模式打开文件，如果文件不存在则创建。
wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
w+	以读写模式打开文件，如果文件不存在则创建。
wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
a	以追加模式打开文件，如果文件不存在则创建。
ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
a+	以读取追加模式打开文件，如果文件不存在则创建。
ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。*/
/*读取文件
语法
以下为异步模式下读取文件的语法格式：
fs.read(fd, buffer, offset, length, position, callback)
该方法使用了文件描述符来读取文件。
参数
参数使用说明如下：
fd - 通过 fs.open() 方法返回的文件描述符。
buffer - 数据写入的缓冲区。
offset - 缓冲区写入的写入偏移量。
length - 要从文件中读取的字节数。
position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。*/
/*关闭文件
语法
以下为异步模式下关闭文件的语法格式：
fs.close(fd, callback)
该方法使用了文件描述符来读取文件。
参数
参数使用说明如下：
fd - 通过 fs.open() 方法返回的文件描述符。
callback - 回调函数，没有参数。*/
/*删除文件
语法
以下为删除文件的语法格式：
fs.unlink(path, callback)
参数
参数使用说明如下：
path - 文件路径。
callback - 回调函数，没有参数。*/
var fs = require('fs');
var buf = new Buffer(1024);
fs.open('npm用法.txt', 'r', function (err, fd) {
    if(err){
        console.error(err);
    }
    console.log('文件打开成功！');
    console.log('准备读取');
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if(err){
            console.error(err);
        }
        console.log(bytes + '字节被读取');
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
        fs.close(fd, function () {
            console.log('文件关闭成功！');
        });
    })
});
/*fs.unlink('index.html', function () {
   console.log('删除成功！');
});*/
/*获取文件信息
语法
以下为通过异步模式获取文件信息的语法格式：

fs.stat(path, callback)
参数
参数使用说明如下：
path - 文件路径。
callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：
var fs = require('fs');
fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
    console.log(stats.isFile());         //true
})
stats类中的方法有：
方法	描述
stats.isFile()	如果是文件返回 true，否则返回 false。
stats.isDirectory()	如果是目录返回 true，否则返回 false。
stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
stats.isSocket()	如果是 Socket 返回 true，否则返回 false。*/
fs.stat('npm用法.txt', function (err, stats) {
    if(err){
        console.error(err);
    }
    console.log(stats);
    console.log('读取文件信息成功！');
    console.log('是否为文件' + stats.isFile());
    console.log('是否是目录' + stats.isDirectory());
});
/*写入文件
语法
以下为异步模式下写入文件的语法格式：
fs.writeFile(file, data[, options], callback)
如果文件存在，该方法写入的内容会覆盖旧的文件内容。
参数
参数使用说明如下：
file - 文件名或文件描述符。
data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。*/
fs.writeFile('npm用法复制.txt', '罗丹是个大混蛋', function (err) {
    if(err){
        console.error(err);
    }
    console.log('文件写入成功！');
    fs.readFile('npm用法复制.txt', function (err, data) {
        if(err){
            return console.error(err);
        }
        console.log('写入的内容是' + data.toString());
    });
});
















