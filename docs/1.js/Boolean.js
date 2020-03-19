
// 除 false、0、""、null、undefined 和 NaN 以外皆为真值
// 非空的字符串都是 true, 空格字符串也是 true, ' '
// new 出来的都是 true, truthy 真值

function truthy(val) {
  return val ? true : false
}

var obj = {name: 'lucy', age: 200}

// 一下都是真值
truthy({})


true
{}
[]
43
-43
'foo'
' '
'0.0'
Infinity
-Infinity

new Date()
Boolean(new Boolean(false)) // true {false}
Boolean(new String('')) // true
Boolean(new Number(NaN))




// 相等运算
  'packt' ? true : false // true
  'packt' == true  // true
  'packt' === true // false

  'packt' === 'packt' // true

  [0] == true // true