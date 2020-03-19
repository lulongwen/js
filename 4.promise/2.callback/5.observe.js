// Observe 观察者模式
// 目标：被观察者
function Subject () {
  this.observes = []
  this.state = 'happy 😺'
}
// 绑定观察者
Subject.prototype.attach = function (observe) {
  this.observes.push(observe)
}
// 改变 state 通知观察者
Subject.prototype.setState = function (state) {
  this.state = state
  this.notify()
}
Subject.prototype.notify = function () {
  this.observes.forEach(item => {
    item.update()
  })
}

// 观察者，一般会有一个方法
function Observe (name, target) {
  this.name = name
  this.target = target
}
// 更新方法
Observe.prototype.update = function () {
  console.log(`通知：${this.name}; 🤗 当前状态是: ${this.target.state}`)
}

let subject = new Subject() // 被观察的对象
// 观察者
let observer = new Observe('myself', subject)
let observer2 = new Observe('mywife', subject)

// 给目标绑定观察者，如果被观察者改变，通知观察者
subject.attach(observer)
subject.attach(observer2)
subject.setState('unhappy ☹️')
subject.setState('🎂(*^▽^*)')
