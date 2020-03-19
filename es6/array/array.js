// Creates an array of elements split into groups the length of size
const chunk = (input, size) => {
  return input.reduce( (arr, item, index) => {
    return index % size === 0
      ? [...arr, [item] ]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item] ];
  }, []);
};

chunk(['a', 'b', 'c', 'd', 'e'], 2);
// [ ['a', 'b'], ['c', 'd'], ['e'] ]

chunk(['a', 'b', 'c', 'd', 'e'], 3);
// [ ['a', 'b', 'c'], ['d', 'e'] ]



// intersection 交叉
var arr = [ [1, 2, 3], [101, 2, 1, 10], [2, 1] ];
arr.reduce( (a, b) => a.filter( c => b.includes(c) ));
// [1, 2]


// 差值，不同的值
var arr = [ [1, 2, 3, 4, 5], [5, 2, 10] ];
arr.reduce( (a, b) => a.filter( c => !b.includes(c) ) );
// [1, 3, 4] 




// return true value
[0, 1, false, 2, '', null, 'ok'].filter(Boolean);
// [1, 2, 'ok']

[1, 2, 3].filter( val => val !== 2);
// [1, 3]


// concat
var arr = [1];
var other = arr.concat(2, [3], [4]);
// [1, 2, 3, 4]


// fill
var arr = [1, 2, 3];
arr.fill('a');
// ['a', 'a', 'a']

Array(3).fill(2);
// [2, 2, 2]

var arr = [3,6,9,12,29].fill('*', 1, 3);
// [3, "*", "*", 12, 29]


// find 返回 obj
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

users.find( item => item.age < 36 );
// { 'user': 'pebbles', 'age': 1,  'active': true }

users.findIndex( item => item.age >= 36);
// 0


// first
[1, 2, 3, 4, 5, 8][0];
// 1

[].concat(1,2,3,5,8).shift();
[].concat([1,2,3,5,8]).shift();
// 1

[].concat(undefined, 1,3).shift();
// undefined

[1, 2, 3, 5, 8].slice(0, 2);
[1, 2, 3, 5, 8].slice(1, 3);
// [2, 3]


// 是不是数组
Array.isArray([]); // true

new ArrayBuffer(2) instanceof ArrayBuffer;
// true




// flatten 提升一级
var arr = [1, [2, [3, [4] ], 5] ];
arr.reduce( (a,b) => a.concat(b), []);
// [1, 2, [3, [4] ], 5]

// flattenDeep
const flattenDeep = (arr) => Array.isArray(arr) ?
  arr.reduce( (a,b) => a.concat( flattenDeep(b) ),[]) : [arr];

flattenDeep(arr);
// [1,2,3,4,5]



// fromPairs
const fromPairs = (arr) => arr.reduce( (item, value) => {
  item[value[0]] = value[1];
  return item;
}, {});

var arr = [ ['arr', 1], ['obj', 22] ];
fromPairs(arr);



// 变量解构赋值 
const [head, ...tail] = [1, 2, 3, 6];
// head  1 
// tail  [2, 3, 6]


// indexOf 找下标
[2, 9, 9 ,19].indexOf(9);
// 1

arr.lastIndexOf(9);
// 2


// join
var arr = ['one', 'two', 'ok', 'lucy'].join('--');
// "one--two--ok--lucy"


// last & lastIndexOf
var num = [1,3,5,6,89];
num[num.length-1];
// 89

num.slice(-1); // [89]
num.slice(-1)[0];
// 89

[].concat(num).pop();
// 89
[].concat(undefined).pop();
// undefined

num.slice(-2);
// [6, 89]


// reverse() 反转
[1, 2, 3].reverse();
// [3, 2, 1]
