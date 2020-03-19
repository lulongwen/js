/**
 * Math.trunc() 返回小数的整数部分
 * 
 * Math.cbrt() 返回任意数字的立方根
 * 
 * Math.sign() 返回一个数字的符号,
 *  指示数字是正数，负数还是零，不是数字返回 NaN
 */

// Math.trunc() 返回小数的整数部分，将数字的小数部分去掉，只保留整数部分
Math.trunc(3.15)  // 3
Math.trunc(3.00) // 3
Math.trunc(-230.98) // -230



// Math.cbrt() 返回任意数字的立方根
Math.cbrt(-1)  // -1
Math.cbrt(27)  // 3


// Math.sign() 返回一个数字的符号
// 指示数字是正数，负数还是零，不是数字返回 NaN
Math.sign(-5) // -1  负数返回 -1
Math.sign(0) // -0   0  返回  0
Math.sign(20) // 1   正数返回  1

Math.sign('203') // 1
Math.sign('foot') // NaN 不是数字返回 NaN

