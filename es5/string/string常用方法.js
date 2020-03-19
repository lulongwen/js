/**
  字符串左边填充，不足12个字符用空格代替
*/
function filling(length=2, pad=0) {
  var str = 'abcd'
  return Array(length).join(pad) + str
  // return Array(length).join(pad) + str.slice()
}

// split 字符串分割
'aa,bb,cc'.split(',') // ['aa', 'bb', 'cc']


/**
  检测一个值是否存在，并且判断类型
  str.valueOf() 对于所有的js对象可用，不管对象是什么，都返回基本的值
    number, string, boolean, function, array, object
    null, undefined.valueOf() 报错
*/
var str = 'abc'
var string = typeof str != 'undefined' && typeof str.valueOf() === 'string' && str.lenth >0


// 提取字符串
var str = 'this is a test.this a list:one,two,three.'
var start = str.indexOf(":") // 第一次出现的位置
var end = str.indexOf(".", start+1) // 从哪个位置？开始查找  start+1
var list = str.substring(start+1, end) // 从:之后开始查找
// list one,two,three


// 去除左右2边的空格
var str = '   fefee   ';
str.replace(/(^\s*)|(\s*$)/g, '')





































