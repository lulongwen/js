
Function.prototype.call = function (context) {
  context = context ? Object(context) : window
  context.fn = this
  let args = []

  for (let i=1, length=arguments.length; i< length; i++) {
    let item = `arguments[${i}]` // ['', '']
      args.push(item)
  }
  let proxy = eval(`context.fn(${args})`)
  delete context.fn
  return proxy
}

fn.call('hello', '1', '2')
