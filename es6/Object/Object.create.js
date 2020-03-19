/**
 * Object.create()
 * 
 * 
 */

var drink = {
  getDrink() {
    return 'water'
  }
}

var dinner = {
  getDinner() {
    return 'rice'
  }
}

// lunch 是个空对象，方法在原型上
var lunch = Object.create(drink)
// lunch // {}
console.log(lunch.getdrink); // "water"


// 判断 lunch的 prototype 是不是等于 drink
Object.getPrototypeOf(lunch) === drink // true


// 设置对象的 prototype
// 第一个参数：要设置的对象, 第二个参数：要设置成的那个 prototype 对象
Object.setPrototypeOf(lunch, dinner)

Object.getPrototypeOf(lunch) === dinner // true
