/**
 * Set 数据结构，类似于 数组，成员的值都是唯⼀一的，没有重复的值
 *  利用这一唯一特性进行数组的去重工作
 * 
 * Size 属性
 *  add(value)
 *  delete(value)
 *  has(value)
 *  clear()
 * 
 * 遍历方法
 *  keys()
 *  values()
 *  entries()
 *  forEach()
 */



// set 数组去重
var arr = [1,2,3,4,5,2,3,4,56,7,90, 3,2,0,0]
var arr2 = ...new Set(arr)
  arr2 = [...arr2]
  //  [1, 2, 3, 4, 5, 56, 7, 90, 0]



// 多数组的合并去重
var arr = [1, 2, 3, 4, 2, 3, 'ok']
var arr2 = [2, 3, 4, 5, 6]

var arr3 = [...new Set([...arr, ...arr2])]
// [1, 2, 3, 4, "ok", 5, 6]



// 添加元素, 向Set加入值时，Set不会转换数据类型，
// Set 内部在判断元素是否存在时用的类似于精确等于(===)的方法，“2”和2是不同的，NaN等于其自身
var set = new Set()
set.add('ok')

set.add(23)
set.add('23')

set.add(NaN)
set.add(NaN) // {"ok", 23, "23", NaN}



// 删除元素
var set = new Set()
set.delete('ok')



// 判断元素是否存在
var set = new Set()
set.add('23')
set.has('23') // true

set.delete('23')
set.has('23') // false



// 清除所有元素
set.clear()


/**
 * Set实例对象的keys()，values()，entries()方法进行遍历
 * Set的键名和键值是同一个值，它的每一个元素的key和value是相同的
 *  所有keys()
 *  values()的返回值是相同的，
 *  entries()返回的元素中的key和value是相同的

 */
var set = new Set(['fn', 'ok', null, 'ok', 2, 3, 2, 3]) 
// {"fn", "ok", null, 2, 3}
set.keys()
set.values()

for(let item of set5.values()) {
  console.log(item)
}


set.entries()
for(let item of set5.entries()) {
  console.log(item)
}
// {"fn" => "fn", "ok" => "ok", null => null, 2 => 2, 3 => 3}




// 数组转 set
var set = new Set([2,3,6]) // {2, 3, 6}
var set2 = new Set(['fn', 'ok', null, 'ok', 2, 3, 2, 3]) 
//  {"fn", "ok", null, 2, 3}


// set 转数组
var arr = [...set]

var arr = Array.from(set2)



