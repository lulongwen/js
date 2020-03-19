
var arr = [
  1,
  [
    2, [ [3, 4], 5 ],
    ['ok', 'good'],
    6
  ],
  ['my', 'name']
]
/**
 * arr+''    "1,2,3,4,5,ok,good,6,my,name"  split(',');
 * ["1", "2", "3", "4", "5", "ok", "good", "6", "my", "name"]
 * @param {*} arr
 */

var unidimensional = arr => {
  // 将数组转字符串后, 再以逗号分隔转为数组
  return (arr + '').split(',')
}

// 返回数字
var num = arr => {
  // 将数组转字符串后, 再以逗号分隔转为数组
  let arr2 = (arr + '').split(',')
  return arr2.map(item => Number.isNaN(item))
}

// 递归转一维数组
var flatten = arr => {
  let arr2 = []
  arr.forEach(item => {
    if (Array.isArray(item)) flatten(item)
    else arr2.push(item)
  })
}
