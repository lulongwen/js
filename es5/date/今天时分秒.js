// 今天时分秒
export const currentDay = () => {
  const dd = new Date()

  const years = dd.getFullYear()
  // 年

  const month = dd.getMonth() + 1
  // 月

  const date = dd.getDate()
  // 日

  const day = dd.getDay()
  // 周几

  const hour = dd.getHours()
  // 小时

  const minutes = dd.getMinutes()
  // 分钟

  const seconds = dd.getSeconds()
  // 秒

  const milli = dd.getMilliseconds()
  // 毫秒

  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][day]

  return `${years}年${month}月${date}日 ${hour}:${minutes}:${seconds} ${week}`
}



// 今天是周几
function getTodaysDate () {
  var now = new Date()
  var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December')
  var date = ((now.getDate() < 10) ? '0' : '') + now.getDate()

  var today = days[now.getDay()] + ', ' +
   months[now.getMonth()] + ' ' +
   date + ', ' +
   now.getFullYear()

  return (today)
}