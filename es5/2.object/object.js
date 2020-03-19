// Object.assign 浅拷贝 不拷贝 prototype 上的属性
// copy the values of all enumerable own properties
function Foo() {
  this.name = '荀子';
}
function Bar() {
  this.title = '思想家';
}
Foo.prototype.d = 23;
Bar.prototype.a = 300;

var obj = Object.assign({}, new Foo, new Bar);
// obj {name: '荀子', title: ''思想家''}



// 获取对象的key值 object’s own enumerable properties.
var keys = Object.keys(obj);
    keys.length;  // 2
// ['name', 'title']


// Object.values
var res = Object.values({one: 1, two: 2, thrre: 3});
// res [1, 2, 3]


// object’s own enumerable property [ key, value ] pairs 枚举对象的属性为 [key, val] 键值对的 数组
var res = Object.entries({one: 1, two: 2, thrre: 3});
// res  [ ["one", 1], ["two", 2], ["three", 3] ]


/** 得到对象的类型
	slice(startIndex,endIndex)
	从0开始索引，其中8代表从第8位（包含）开始截取，本例中代表空格后面的位置
		-1代表截取到倒数第一位（不含），所以正好截取到 [object String] 中的String
		然后把 String 转小写
*/ 
function(obj){
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
  // array, boolean, date, error, function, json, math, number, object, regxp, null, string
}

//将json对象转化为对象
function(str){
  return eval("("+str+")") || JSON.parse(str); 
}