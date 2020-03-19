/**
 * includes() 是否包含
 * startsWith()  开头
 * endsWith()  结尾
 * 
 * 如果某个字符串不够指定的长度，就在其头部或者尾部补全, 字符串才有这个方法
 *  padStart() 
 *  padEnd()
 */

var url = 'https://www.lulongwen.com/index.php?page=23&id=2#name=lucy'

// 是否包含
url.includes('name') // true

//  以 ** 开头
url.startsWith('https://') // true

// 以 ** 结尾
url.endsWith('.png') // false


// padStart()
// 检测 a 的长度大于等于2，如果长度小于2，就拿'0'来补齐
var a = '5'
var b = '23'
a.padStart(2, '0') // '05'
b.padStart(2, '0') // '23'

b.padStart(5, '0') // '00023'



// 进制转换
function mydate() {
  let date = new Date()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  let str = `${hour.toString().padStart(2, 0)}:`
  str += `${minutes.toString().padStart(2, 0)}:`
  str += `${seconds.toString().padStart(2, 0)}`
  console.log(str)
  return str
}

// 输入现在的时间
setInterval(() => {
  mydate()
}, 1000);