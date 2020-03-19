

// 多少天之前
const formatDate = timeString => {
  if (!timeString) return
  const dd = new Date(timeString)
  // 现在的时间 - 传入的时间 = 相差的时间，单位：秒
  let time = (new Date().getTime() - dd.getTime()) / 1000

  if (time <= 0) {
    time = Math.abs(time)
    return '只计算之前的时间'
  }
  // 小于30秒
  else if (time < 30) return '刚刚'
  // 小于60秒
  else if (time < 60) return `${parseInt(time)} 秒前`
  // 多少分钟前
  else if (time / 60 < 60) return `${parseInt(time / 60)} 分钟前`
  // 几小时前
  else if (time / 60 / 60 < 24) return `${parseInt(time / 60 / 60)} 小时前`
  // 几天前
  else if (time / 24 / 60 / 60 < 31) return `${parseInt(time / 24 / 60 / 60)} 天前`
  // 几月前，有1天误差
  else if (time / 30 / 24 / 60 / 60 < 12) return `${parseInt(time / 30 / 24 / 60 / 60)} 月前`
  // 几年，有一天误差
  else (time / 365 / 24 / 60 / 60 < 366) return `${parseInt(time / 365 / 24 / 60 / 60)} 年前`
}



/*
  把日期格式转换为 js Date类型
  date 日期字符串 
    格式必须为 yyyy-MM-dd hh:mm:ss 或 yyyy-MM-dd hh:mm:ss.S
  return 返回JS日期对象
*/
function getDateByStr (date) {
  if (!date) return

  // 去掉日期后面的毫秒数
  if (date.indexOf('.') != -1) {
    date = date.substring(0, date.indexOf('.'))
  }

  // 20160101120101 转换成 2016-01-01 12:01:01
  if (date.trim().length == 14 && date.indexOf('-') == -1) {
    let reg = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/
    date = date.replace(reg, '$1-$2-$3 $4:$5:$6')
  }

  // 20160101 转换成 2016-01-01
  if (date.trim().length == 8 && date.indexOf('-') == -1) {
    let reg = /(\d{4})(\d{2})(\d{2})/
    date = replace(reg, '$1-$2-$3 00:00:00')
  }

  date = date.replace(new RegExp('-', 'gm'), '/')
  return new Date(date)
}



/*
  获取时间的毫秒
  date格式: 
    yyyy-MM-dd hh:mm:ss
    yyyy-MM-dd hh:mm:ss.S的时间字符串
  return 时间毫秒数
*/
function getMilliseconds (date) {
  if (!date) return 0

  // 去掉后面毫秒数
  if (date.indexOf('.') != -1) {
    date = date.substring(0, date.indexOf('.'))
  }
  date = date.replace(new RegExp('-', 'gm'), '/')
  return (new Date(date)).getTime()
}


// 当前时间是否大于设置的时间
function isPassHour (h) {
  let dd = new Date()
  let hour = dd.getHours()

  return (hour >= h) ? true : false
}