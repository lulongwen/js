/**
 * Array.from() 类数组转数组，能用数组的方法
 *  类数组？ 有索引 有长度
 * 
 * Array.of() 创建数组
 * 
 * Array.isArray() 是不是数组
 * 
 * find() 找到当前数组里面 第一个满足条件的值
 * findIndex() 到当前数组里面第一个满足条件值得索引
 */

// 封装一个类数组转数组
// 获取页面中所有 li，把 li转为 数组
function likeArray(arr) {
  let temp = []
  try {
    temp = [].slice.call(arr)
  }
  catch(err) {
    for(let i=0; i<arr.length; i++) {
      temp.push(arr[i])
    }
  }

  return temp
}


// Array.from 把类数组转成数组，能用数组的方法
var lis = document.querySelectorAll('li')
var arr = Array.from(lis)


// 第二个参数；映射
// 指定了该参数，则最后生成的数组会经过 该函数的加工处理后再返回
//  [3, 6, 9]
var arr3 = Array.from([1,2,3], arg => arg * 3)


// Array.of() 创建数组，变量名相同，后面会覆盖前面的
var arr = Array.of(7); // 7
var arr = Array.of(1,3, true, {}, 'title')
var arr = Array.of(); // []



/*
fill 填充-替换数组
  arr.fill(value) 
  arr.fill(value, start) 
  arr.fill(value, start, end)
 */
var arr = [1, false, 'lala']
arr.fill(9) // [9, 9, 9]
arr.fill('ok', 2) // 填充 ok, 从第二个位置开始  [9, 9, "ok"]
arr.fill('ok', 1, 3) // [9, "ok", "ok"]



/*
includes 判断一个数组是否包含一个指定的值，酌情返回 true/false
  arr.includes(val)
  arr.includes(val, fromIndex)
  从该索引处开始查找val,默认为 0
  如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索, 倒数
  */
var arr = [1,20, NaN, false, 'ok', true]
arr.includes(1) // true
arr.includes(NaN) // true

arr.includes(200) // false
arr.includes(true, -1) // true
arr.includes(20, -2) // false




/*
  .keys() 下标 
  .values() 值
  .entries()  key,val

*/
var arr = [1, true, 'title', 'like']

// keys
for(let index of arr.keys() ){ 
  // 0 1 2 3
  console.log('keys',index);
}

// values
for(let value of arr.values() ){ 
  // 1, true, 'title', 'like'
  console.log('values', value);
}


// entries()
for(let [index, val] of arr.entries() ){
  // key-val 0 1
  // key-val 1 true
  // key-val 2 title
  // key-val 3 like
  console.log('key-val', index, val);
}


// 迭代
var iterator = arr.keys()
iterator.next() // {value: 0, done: false}
iterator.next() // {value: 1, done: false}
iterator.next() // {value: 2, done: false}
iterator.next() // {value: 3, done: false}
iterator.next() // {value: undefined, done: true}
iterator.next() // {value: undefined, done: true}


// 迭代
var iterator = arr.values()
iterator.next() // {value: 1, done: false}
iterator.next() // {value: true, done: false}
iterator.next() // {value: 'title', done: false}
iterator.next() // {value: 'like', done: false}
iterator.next() // {value: undefined, done: true}
iterator.next() // {value: undefined, done: true}




















// find 只找一个，找到就返回，找不到到返回 undefined
var arr = [1,2,3,4,5,6,7]
var arr2 = arr.find(function(item, index, arr) {
  // item 当前项，index 索引， arr 原数组
  console.log(item, index, arr)
  return item > 5
})
console.log(arr2); // 6


var index = arr.findIndex(item => {
  return item > 2
})
index // 2