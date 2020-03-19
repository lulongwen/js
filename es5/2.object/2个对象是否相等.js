// 对象比较
export const comprison = propertyName => {
  return (obj1, obj2) => {
    let value1 = obj1[propertyName] || 0
    let value2 = obj2[propertyName] || 0

    if (value1 < value2) return -1
    else if (value1 > value2) return 1
    else return 0
  }
}

// 判断两个对象(包含数组)的值是否相等，返回布尔值
export const equalValue = (a, b) => {
  let aProps = Object.getOwnPropertyNames(a)
  let bProps = Object.getOwnPropertyNames(b)

  let result = true
  if (aProps.length !== bProps.length) return false

  aProps.map(item => {
    if (typeof a[item] === 'object') {
      result = obj.equalValue(a[item], b[item])
    } else {
      if (a[item] !== b[item]) result = false
    }
  })

  return result
}
