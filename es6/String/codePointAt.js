/**
 * .charAt() 返回指定位置的字符
 * 
 * .charCodeAt() 返回前两个字节 和 后两个字节的值

 * .codePointAt() 能够正确处理 4 个字节储存的字符, 返回一个字符的码点

  "𠮷"是一个需要4个字节存储的汉字
 */

var ji = '𠮷a'

ji.length  // 3

// charAt() 指定位置的字符
ji.charAt(0) // "�"
ji.charAt(1) // "�"

// charCodeAt() 指定位置的字符的 Unicode 编码
ji.charCodeAt(0) // 55362
ji.charCodeAt(1) // 57271


// 
ji.codePointAt(0) // 134071
ji.codePointAt(1) // 57271

// codePointAt()方法返回的是码点的 十进制值，
// 如果想要十六进制的值，可以使用 toString方法转换一下
ji.codePointAt(0).toString(16) // "20bb7"


// String.fromCharCode() 从码点返回对应字符, 不能识别 32 位的 UTF-16 字符 Unicode 编号大于0xFFFF
// 所以 0x20bb7就发生了溢出，最高位2被舍弃了，最后返回码点 U+0BB7 对应的字符，而不是码点 U+20bb7对应的字符
String.fromCharCode('0x20bb7') // "ஷ"


/**
String.fromCodePoint() 可以识别大于0xFFFF的字符
弥补了 String.fromCharCode() 方法的不足。与codePointAt()方法相反
fromCodePoint()方法定义在String对象上
codePointAt()方法定义在字符串的实例对象上
 */
String.fromCodePoint('0x20bb7') // "𠮷"


// codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法
function is32Bit(str) {
  return str.codePointAt(0) > 0xFFFF;
}
is32Bit("𠮷") // true
is32Bit("a") // false


/**
  0b 二进制
  00 八进制
  0d 十进制
  0x 表示右边跟的数是十六进制
 */


// ES5 字符串，处理大于 0xffff
for(let i=0; i< str.length; i++) {
  //  �
  //  �
  // a
  console.log('es6', str[i])
}


// ES6 字符串，处理大于 0xffff
for(let code of str) {
  // es6 𠮷
  // es6 a
  console.log('es6', code)
}