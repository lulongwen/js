let name = 'lucy'
let age = 20

let str = `${name} 今年 ${age}`
// console.log(str)

let str2 = "${name} 今年 ${age} 岁了"
let reg = /\${([^}]*)}/g

str = str2.replace(reg, function ($1, $2) {
  // console.log('argu', arguments, $1, $2)
  // return eval(arguments[1])
  console.log('argu', $1, $2) // $1 ${name}, $2 name
  return eval($2)
})
console.log(str)

