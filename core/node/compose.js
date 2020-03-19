// compose 函数嵌套

function sum (a, b) {
  return a + b
}

function length (a) {
  return a.length
}

function add (value) {
  return `$ ${value}`
}

function price (value) {
  return `price = ${value}`
}

// compose
function compose (...arg) {
  return arg.reduce((memo, current) => {
    return function (...value) {
      return memo(current(...value))
    }
  })
}

compose(price, add, length, sum)(20, 100)
