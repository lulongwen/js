// js获取今天、昨天、明天 "2018-09-03"
export const day = (num = 0) => {
  const dd = new Date()
  // 获取 num 天后的日期
  dd.setDate(dd.getDate() + num)

  let years = dd.getFullYear()

  let month = dd.getMonth() + 1

  let date = dd.getDate()

  month = `0${month}`.slice(-2)
  date = `0${date}`.slice(-2)
  return `${years}-${month}-${date}`
}

day() //  "2018-12-01" 今天

day(-1) // "2018-11-30" 昨天
day(-120) // "2018-08-03"

day(1) // "2018-12-02" 明天
day(200) // "2019-06-19"
