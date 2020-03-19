
let search = {
  name: '李娜',
  id: 5,
  status: 0,
  order_sn: 'ORDER9012312'
}

const serialize = obj => {
  let arr = []
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  // arr 序列为 key=value 的数组
  // ["name=李娜", "id=5", "status=0", "order_sn=ORDER9012312"]

  // 最后串联为一个字符串
  // "name=李娜&id=5&status=0&order_sn=ORDER9012312"
  return arr.join('&')
}

// es6 序列化
const serialize2 = obj => {
  return Object.entries(obj).join('&').replace(/\,/g, '=')
}
