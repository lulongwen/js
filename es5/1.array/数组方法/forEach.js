const arr = ['apple', 'pear', 'bananer', 'orange', 'tomato'];

// for循环 遍历数组，编程式
for(var i =0; i< arr.length; i++){
  // console.log(arr[i], i); 
}

// for 循环优化
for(let i=0, len=arr.length; i<len; i++){
  // console.log(arr[i], i); 
}


// forEach 遍历数组，没有返回值
arr.forEach( (val, index, obj)=>{
  if(index === 2) return false;
  // console.log(val,index, obj);
});


// for of 遍历数组，最直接的遍历，可以 break, continue, return
for( let val of arr){
  if( val === 'pear') continue;
  // console.log(val, arr[val]); // arr[val] undefied
}

// for of 有下标
for(let[i, val] of arr.entries()){
  // console.log(i,val, arr[i]);
}

// 把 array变为 Map new Map( arr.map( ( item, i ) => [ i, item ] ) )
for (let [index, elem] of new Map(arr.map((item, i) => [i, item]))) {
  console.log(index, elem);
}

for (const {item, index} of arr.map((item, index) => ({item, index}))) {
  console.log(item, index); // 9, 2, 5
}

for (let [index, item] of arr.entries()) {
  console.log(index, item)
}
/* arr.entries()
  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
  */
  

// for in 是遍历对象的，不适合遍历数组，切记
arr.ee = '300'; // for in 可以遍历出数组的私有属性
for(let key in arr){
  // key会变成字符串类型，包括数组的私有属性也可以打印出来
  console.log(key);
}

let obj = {
  foods: 'rice and meat',
  like: 'eggs'
};
console.log( `Object.keys: ${Object.keys(obj)}`);

for( let val of Object.keys(obj) ){
  console.log(val, obj[val]); // val是字符串类型 obj.val undefined
}




const num = [18, 26, 37, 6, 89, 99];

function large(elem, index, arr) {
  console.log(elem, index, arr);
  return elem >= 23;
}

// every() 
var res = num.every(large);
// false 一项为 false 就返回 false

var res = num.every( (elem, index, arr) => elem >=6);
// true 每一项都必须为 true



// filter 过滤 返回 true
[0, 1, false, 2, '', 3].filter(v => v);
// [ 1, 2, 3 ]

var res = num.filter( val => val >= 23 );
// [26, 37, 89, 99]



// reduce
var res = arr.reduce( (r, v, i, a, k=v.legnth) => ( (r[k] || (r[k] = [])).push(v), r ), {});