
/**
 * JSON.parse() 深度克隆，适用于 对象的深拷贝
 不适用于正则，函数，undefined，Date日期

原理：
 	用 JSON.stringify 将js对象序列化，JSON字符串
 	再用 JSON.parse 来反序列化(还原)js对象

细节：
	1 obj里面有时间对象，则JSON.stringify后，
	再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象

	2 如果obj里有 RegExp、Error对象，则序列化的结果将只得到空对象

	3 obj里有函数，undefined，则序列化的结果会把函数或 undefined丢失

	4 如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null

	5 JSON.stringify()只能序列化对象的可枚举的自有属性，
	如果obj中的对象是有构造函数生成的，用JSON.parse(JSON.stringify(obj))深拷贝后
		会丢弃对象的 constructor

	6 对象中存在循环引用的情况也无法正确实现深拷贝


总结：
	JSON.parse(JSON.stringify(obj))
	obj 不能包含 Date()，函数，正则, Error, undefined, NaN, Infinity, 构造函数
	obj 不能循环引用
 */


const deepClone = obj => {
  const temp = JSON.stringify(obj)
  return JSON.parse(temp)
}

// 对象的深拷贝
var obj = {
  title: {
    head: "thead",
    footer: "ftooer",
    name: "table"
  },
  name: "gino",
  sex: "male",
  age: "27"
}

var arr = [1, 2, 3, 4, 5, [0, 1], { name: '小花胖', obj2: { age: 90 } } ]

var obj2 = deepClone(obj)
	obj.title.name = 'list'
	console.log(obj2)
