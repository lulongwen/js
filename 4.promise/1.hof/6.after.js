// after 指定一个函数被调用多少次才会真正执行
function after(times, callback) {
  return () => {
    if (--times === 0) {
      callback && callback()
    }
  }
}

function say() {
  console.log("say")
}

let newSay = after(2, say)
newSay()
newSay()
