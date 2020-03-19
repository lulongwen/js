// 获取 argv参数
let params = process.argv.slice(2)
  .reduce((memo, current, index, arr) => {
    if (current.includes('--')) {
      memo[current.slice(2)] = arr[index+1]
    }
    return memo
  }, {})
