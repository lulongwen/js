// 被观察者，目标
class Target {
  // 实例上的方法
  constructor() {
    this.observes = []
    this.state = 'happy 😺'
  }
  
  // prototype 原型上的方法
  attach (observe) { // 绑定观察者
    this.observes.push(observe)
  }
  
  setState (state) {
    this.state = state
    this.notify()
  }
  
  notify () {
    this.observes.forEach(item => {
      item.update()
    })
  }
}


// 观察者，一般会有一个方法
class Observe {
  constructor (name, target) {
    this.name = name
    this.target = target
  }
  
  update () {
    console.log(`通知：${this.name}; 🤗 当前状态是: ${this.target.state}`)
  }
}

let target = new Target() // 被观察的对象
let watch1 = new Observe('myself', target) // 观察者
let watch2 = new Observe('mywife', target)

// 给目标绑定观察者，如果被观察者改变，通知观察者
target.attach(watch1)
target.attach(watch2)

target.setState('unhappy ☹️')
target.setState('🎂(*^▽^*)')
