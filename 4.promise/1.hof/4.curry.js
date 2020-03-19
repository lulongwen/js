// 柯里化 将一个函数拆分为多个函数；高阶函数包含 柯里化，bind可以保留参数

// 函数的参数就是 function 的 length
const add = (a, b, c, d, e) => {
  console.log(a, b,c, d,e)
  return a + b + c + d + e
}

// 每次拿 arr参数和 add函数的参数个数比较
const currying = (fn, arr = []) => {
  let {length} = fn
  return (...arg) => {
    arr = [...arr, ...arg]
    if (arr.length < length) {
      // 把函数的参数保留起来，什么时候用，什么时候传参；再柯里化执行
      return currying(fn, arr)
    }
    
    // 如果相等，就让真正的函数 fn执行
    return fn(...arr)
  }
}

let data = currying(add)(1)(2)(3)(4)(5)
console.log('data', data)
