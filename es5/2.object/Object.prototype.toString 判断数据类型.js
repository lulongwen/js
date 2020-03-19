/**
 * 使用Object.prototype上的原生toString()方法判断数据类型
 *  Object.prototype.toString() 本身是允许被修改的
 *  以下都是 toString()方法未被修改的前提下

 得到对象的类型
  slice(startIndex,endIndex)
  从0开始索引，其中8代表从第8位（包含）开始截取，本例中代表空格后面的位置
    -1代表截取到倒数第一位（不含），所以正好截取到 [object String] 中的String
    然后把 String 转小写
 */

 function(obj){
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
  // array, boolean, date, error, function, json, math, number, object, regxp, null, string
}

// 1.判断基本类型
  // "[object Null]
  Object.prototype.toString.call(null);
  
  // "[object Undefined]"
  Object.prototype.toString.call(undefined);
  
  // "[object String]"
  Object.prototype.toString.call("abc");
  
  // "[object Number]"
  Object.prototype.toString.call(123);
  
  // "[object Boolean]"
  Object.prototype.toString.call(true);


  
// 2.判断原生引用类型：
// 函数类型
Function fn(){ console.log(“test") }
// "[object Function]"
Object.prototype.toString.call(fn);


// 日期类型
var date = new Date();
// "[object Date]"
Object.prototype.toString.call(date);


// 数组类型
var arr = [1,2,3];
// "[object Array]"
Object.prototype.toString.call(arr);

// 正则表达式
var reg = /[hbc]at/gi;
// "[object RegExp]"
Object.prototype.toString.call(reg);


// Math 对象 "[object Math]"
Object.prototype.toString.call(Math);


// 自定义类型
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person = new Person("Rose", 18);
// "[object Object]"
Object.prototype.toString.call(arr);

// 很明显这种方法不能准确判断person是Person类的实例，而只能用instanceof 操作符来进行判断:
console.log( person instanceof Person ); // 输出结果为true


// 判断原生JSON对象：
var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON);

// 输出 "[object JSON]" ，说明JSON是原生的，否则不是；
console.log(isNativeJSON);