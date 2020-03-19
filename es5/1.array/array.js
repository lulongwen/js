/** 得到对象的类型
	slice(startIndex,endIndex)
	从0开始索引，其中8代表从第8位（包含）开始截取，本例中代表空格后面的位置
		-1代表截取到倒数第一位（不含），所以正好截取到 [object String] 中的String
		然后把 String 转小写
*/
function type(obj){
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
  // array, boolean, date, error, function, json, math, number, object, regxp, null, string
}



// ... new Set() 数组去重
var arr = [ ... new Set([1, 2, 1, 4, 1, 3]) ];
// [1, 2 4, 3]


// .find 找值 & findIndex 找下标
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
// 只找一个，true 就返回
var user = users.find( item => item.age < 40);
// user {user: "barney", age: 36, active: true}

var index = users.findIndex( item => item.age >= 40);
// index 1




// concat
var arr = [1];
var other = arr.concat(2, [3], [55]);
// other [1, 2, 3, 55]

var other = arr.concat(2, [3], [[6, 7]]);
// other [2, 3, [6,7]]


// fill
var arr = [1, 2, 3];
arr.fill('a');
// arr ['a', 'a', 'a']

Array(3).fill(2);
// [2, 2, 2]

[4, 6, 8, 10].fill('*', 1, 3); // start & end
// [4, '*', '*', 10]



// first
var arr = [1, 2, 3, 4, 5];
arr[0];  // 1

arr.slice(0, 2);
// [1, 2] start & end



// 数组小到大排序
function sort(arr,isAsc){
  var isAsc = isAsc || 1;
  return arr.sort(function(a,b){
    if(isAsc == 1) return b - a;
    return a - b;
  });
}


// 数组随机排序
function sort(){
return ary.sort(function(a,b){
  return Math.random() > 0.5 ? -1 : 1;
  //产生0-1之间的随机数，如果大于0.5就不交换位置，否则交换位置
});

}
