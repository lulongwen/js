/**
 * reduce(prev, next, index, arr)
 *  初始值, 或上一次回调函数的返回值
 *  当前元素值
 *  当前索引
 *  调用 reduce 的数组
 */
  
  // reduce 数组求和
var arr = [22, 3, 5, 6, 7, 90]
var total = arr.reduce((prev, next) => {
  return prev + next;
}, 0)
// total // 133



// reduce 二维数组转一维数组
var arr = [[1, 2], [3, 4], [5, 6]]
var arr2 = arr.reduce((prev, next) => {
  return prev.concat(next)
}, [])
// arr2 [1, 2, 3, 4, 5, 6]




// 数组中每个元素出现的次数
// in操作符用来判断某个属性属于某个对象，可以是对象的直接属性，也可以是通过 prototype继承的属性

var arr = ['tom', 'jim', 'jack', 'tom', 'jack', 3, 3, 3]
var time = arr.reduce((prev, key) => {
  console.log('prev', prev, 'next', key, key in prev)
  if (key in prev) prev[key] ++;
  else prev[key] = 1;
  return prev
}, {})
/**
 * prev {} next tom false
 * prev {tom: 1} next jim false
 * prev {tom: 1, jim: 1} next jack false
 * prev {tom: 1, jim: 1, jack: 1} next tom true
 * prev {tom: 2, jim: 1, jack: 1} next jack true
 * prev {tom: 2, jim: 1, jack: 2} next 3 false
 * prev {3: 1, tom: 2, jim: 1, jack: 2} next 3 true
 * prev {3: 2, tom: 2, jim: 1, jack: 2} next 3 true
 *
 * {3: 3, tom: 2, jim: 1, jack: 2}
 */
  
  
  
  // reduce 计算出现的次数
var time = (arr, val) => arr.reduce((prev, next) => {
    return (next == val) ? prev + 1 : prev + 0
  }, 0)



// JS数组去重
// https://www.cnblogs.com/jiayuexuan/p/7527055.html


// reduce 数组去重
// prev 是传入的空数组 []，cur 是排序后数组的第一项 1
var arr = [1, 2, 1, 2, 3, 5, '999', 5, 3, 'ok', 'ok', 'ok', 'ok']
var result = arr.sort()
  .reduce((prev, cur) => {
    let {length} = prev
    if (!length || prev[length -1] !== cur) prev.push(cur)
    
    return prev
  }, [])
//  [1, 2, 3, 5, "999", "ok"]



/**
 * new Set() 数组去重 [1, 2, 3, 5, "999", "ok"]
 * var result = new Set(arr)
 * result = [...result]
 */
var result = [...new Set(arr)]


var result = arr => (Array.from(new Set(arr)))
var result = arr => {
  return Array.from(new Set(arr))
}
// [1, 2, 3, 5, "999", "ok"]
