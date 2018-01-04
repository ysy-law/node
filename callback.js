/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/4.
 */
var fs = require('fs');
// 阻塞代码实例
var data = fs.readFileSync('npm用法.txt');
console.log(data.toString());
console.log('程序执行接结束');
// 非阻塞代码实例
fs.readFile('npm用法.txt', function (err, data) {
    if(err){
        return console.error(err);
    }
    console.log(data.toString());
});
console.log('程序执行接结束!');
exports.data = data;