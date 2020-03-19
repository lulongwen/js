/**
 * 字符串模板 特殊的字符串
 *  支持换行， 取值
 * ${var} 
 */

var name = 'hello'
var age = 20

var str = 'good~ \' ' + name + '\' 今年' + age  + 'years'
var str = `goods~ \' ${name} \' ${age} years`

var ul `<ul>
  <li>${name}</li>
  <li>${age}</li>
</ul>`;

console.log(ul)
 

var str = 'good~ \' ${name} \' ${age} years'

// 自己实现一个字符串模板功能  /\$\{([^}]*)\}/g
let reg = /\$\{([^}]*)\}/g;
str = str.replace(reg, function() {
  console.log('arg', arguments)
  return eval(arguments[1]) // with
})


// 自定义模板字符串的实现, 第一个参数是 字符串的数组, 第二个参数是 第一个变量
function jw() {
  let str = '';
  let string = arguments[0]
  console.log('string', string)

  // Array.prototype.slice.call()
  let values = [].slice.call(arguments, 1)

  for(let i=0; i< values.length; i++) {
    str += `${string[i]} * ${values[i]} *`
  }
  str += string[string.length -1]

  return str
}

var name = 'hello'
var age = 20
var str = jw`hello~ ${name} ${age} years`

