var arr = [1, 12, 13, 14, 15, 29, 30, 49, 999, 6, 7, 8, 9, 10, 19]
arr.sort()

arr.sort((a, b) => a - b)

arr.sort((a, b) => b - a)

arr.sort((a, b) => a > b ? 1 : 0)



var arr = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }
]
arr.sort((a, b) => (a.age > b.age) ? 1 : 0)



var arr = ['Ana', 'ana', 'john', 'John']
arr.sort((a, b) => a.toLowerCase() > b.toLowerCase)


