// call的特点：1 改变当前函数的 this指向；2 让当前函数执行

function fn() {
  console.log(1)
}

function fn2() {
  this.name = 'lucy'
  console.log(this, 2)
}

fn.call('hello', 1, 2)

// 如果有多个 call会让 call方法执行，并且把 call中的 this变成 fn2
fn.call.call.call(fn2, [])

// call 实现，参数是多个
Function.prototype._call = function (context) {
  // 防止 context是普通值，用 Object(context) 包一下
  context = context ? Object(context) : window
  context.fn = this
  
  let [args, {length}] = [[], arguments]
  for (let i = 1; i< length; i++) {
    args.push(`arguments[${i}]`)
  }
  
  // 利用数组的 toString 特性
  let executor = eval(`context.fn(${args})`)
  delete context.fn
  return executor
}


// apply 实现，参数是数组
Function.prototype._apply = function (context, arg) {
  // 防止 context是普通值，用 Object(context) 包一下
  context = context ? Object(context) : window
  context.fn = this
  
  if (!arg) return context.fn
  
  // 利用数组的 toString 特性
  let executor = eval(`context.fn(${args})`)
  delete context.fn
  return executor
}


