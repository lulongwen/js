/**
 * 
 *  super 覆盖对象的方法
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

var lunch = {
  __proto__: drink,  // 设置prototype
  // 重新定义 getDrink, 覆盖原来的
  getDrink() {
    return super.getDrink() + ' bananer'
  }
}

// lunch.getDrink() //  "water"
lunch.getDrink() // "water bananer"
Object.getPrototypeOf(lunch) === drink // true

lunch.__proto__ = dinner
Object.getPrototypeOf(lunch) === dinner // true