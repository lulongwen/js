let arr = [
  ...{
    0: 100,
    1: 200,
    length: 2,
    [Symbol.iterator]: function* () {
      let index = 0
      while (index !== this.length) {
        yield this[index++]
      }
    },
    [Symbol.iterator]: function () {
      let index = 0
      return {
        next: () => ({
          value: this[index],
          done: index++ === this.length
        })
      }
    }
  }
]

console.log(arr)
