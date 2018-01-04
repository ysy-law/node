/**
 * 描述:
 * @author: liuqi@ruijie.com.cn
 * @date  :2018/1/4.
 */
var util = require('util');
/*
util.inherits
util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的。*/

/*
util.isArray(object)
如果给定的参数 "object" 是一个数组返回true，否则返回false。*/
console.log(util.isArray({}));
/*util.isRegExp(object)
如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。*/
console.log(util.isRegExp(/abc/g));
/*util.isDate(object)
如果给定的参数 "object" 是一个日期返回true，否则返回false。*/

/*util.isError(object)
如果给定的参数 "object" 是一个错误对象返回true，否则返回false。*/