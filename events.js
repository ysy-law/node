/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/4.
 */
// 类方法 listenerCount(emitter, event) 返回指定事件的监听器数量。


var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('open', function () {
   console.log('打开成功!');
   eventEmitter.emit('fly', '小鸟');
});
eventEmitter.on('fly', flying);
eventEmitter.on('fly', shoot);
eventEmitter.emit('open');
console.log('执行完毕！');

function flying(a) {
    console.log('飞出成功！' + a);
}
function shoot(a) {
    console.log('击杀成功!' + a);
}

console.log(events.EventEmitter.listenerCount(eventEmitter, 'fly'));