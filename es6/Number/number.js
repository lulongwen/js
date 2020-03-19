/**
 * Number.isInteger() 判断是否是⼀一个数 整数
 * 
 * Number.isFinite()  判断是否是⼀一个数 除去NaN
 * 
 * Number.isSafeInteger()  判断传入的参数值是否是一个“安全整数”
 * 
 * Math.trunc() 去掉⼩小数部分
 * 
 * 
 * Number.MAX_SAFE_INTEGER
 *  -2的 53次⽅ 到2的 53次⽅
 * 
 */


// Number.isFinite(val) 检测传入的参数是否是一个数，去除 NaN
Number.isFinite(23)  // true
Number.isFinite(NaN) // false
Number.isFinite('true'/0) // false

// Number.isNaN() 被检测值是不是 NaN
Number.isNaN(NaN) // true
Number.isNaN(303) // false


// Number.isInteger(val) 判断给定的参数是否为整数
Number.isInteger(25)  // true
Number.isInteger(+25.00) // true
Number.isInteger(-25.00) // true
Number.isInteger(25.0) // true

Number.isInteger('29')  // false
Number.isInteger('okla') // false


Number.isSafeInteger(200) // true
Number.isSafeInteger('200.00') // false
Number.isSafeInteger('okla') // false