var arr = [1, 2, 22, 3, 6, 89];

arr.reduce( (prevValue, currentValue, currentIndex, arr) => prevValue + currentValue );
// 123


arr.reduceRight( (prevValue, currentValue, currentIndex, arr) => prevValue - currentValue );
// 55


var res = arr.some( item => item >= 10 );
// true



// 实现 reduce函数
Array.prototype.myReduce = function(fn, prev) {
  // this Array
  console.log(fn, prev, this)
  for(let i=0; i< this.length; i++) {
    if (typeof prev === 'undefined') {
      prev = fn(this[i], this[i+1], i+1, this)
    }
    else {
      prev = fn(prev, this[i], i, this)
    }
  }

  return prev
}

arr = [{ count: 1, price: 30 }, { count: 2, price: 3 }, { count: 4, price: 5 }]
var result = arr.myReduce((prev, next, index, array) => {
  if (index === array.length-1) {
    // 求平均数
    return (prev + next.count * next.price) / array.length
  }
  return prev + next.cuont * next.price
}, 0) // 0 不会占据数组的长度





// sort 排序
const fruits = [
  {name:"banana", amount: 2},
  {name:"apple", amount: 4},
  {name:"pineapple", amount: 2},
  {name:"mango", amount: 1}
];

const sortBy = key => {
  return (a, b) => (a[key] > b[key]) ?
    1 : (b[key] > a[key]) ? -1 : 0;
}
fruits.sort(sortBy('name'));
/**
 * [
  {name: "apple", amount: 4},
  {name: "banana", amount: 2}
  {name: "mango", amount: 1},
  {name: "pineapple", amount: 2}
 ]
 */



