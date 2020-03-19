/**
 * includes()  包含字符串
 * 
 * startsWith() 是否在开头包含
 * endsWith() 是否在结尾包含
 * 
 * padStart(2, '0')
 * padEnd(2, '0')
 * 
 * repeat(num) 重复多少次
 * 
 * 模板字符串 `${name}`
 * 
 * String.raw() 不转义输出
 */

var food = 'rice'
var more = food.repeat(100)
console.log(more);
// ricericericericericericericericericericericeric...


// 补白，日期补零，如果是数字，报错，要把数字转成字符串
var str = '2', str2 = '23'
str.padStart(2, '0') // "02" 前补白
str.padEnd(2, '0') // "20"  后补白



// String.raw() 不转义 \n, 参数不能是变量
var str = `Hi\n${2+3}`

String.raw(`Hi\n${2+3}`) // \n 不转义

console.log(str); // \n 转义



/**
 * .startsWith(string) 开头包含
 * .endsWith(string) 结尾包含
 * .includes(string) 包含
 */
var food ="rice";
var drink ="milk";
var lunch = `今天吃的是 ${food} 和 ${drink}，哈哈 哈.jpg `;

var start = lunch.startsWith('今天') // true
var start = lunch.startsWith('哈哈') // false

// 注意空格 细节
var end = lunch.endsWith('.jpg')  // false
var end = lunch.endsWith('.jpg ')  // true
var end = lunch.endsWith(' 哈.jpg ')  // true
var end = lunch.endsWith(' 哈.jpg') // false

var include = lunch.includes('rice') // true








// includes() 返回 true / false
var userAgent = window.navigator.userAgent
userAgent.includes('AppleWebKit') // true


var str = ''
var username = 'lucy'
var age = 18

for(let i=0; i< 3; i++) {
  str += `<li class="item" data-name="${username}">
    <b>${username}</b>
    <a href="">年龄： ${age}</a>
  </li>`
}