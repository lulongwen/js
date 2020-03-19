// 封装一个选项卡
function Tab (params) {
  const options = {
    activeName: 'change',
    index: 0
  }
  
  // 合并参数
  this.options = {...options, ...params}
  
  // 构造函数三部曲，1 初始化数据，2 动态生成 DOM，
  // 3 绑定事件， this指向只要在这个方法里面实现就好
  this.init()
  this.render()
  this.bindHandler()
}


Tab.prototype = {
  constructor: Tab,
  init() {
    let { data = [], el } = this.options
    this.length = data.length
    this.data = data
    this.el = el
  },
  
  render() {
    let ul = document.createElement('ul')
    ul.className = 'tab-item'
    
    // 创建一个虚拟的节点对象,创建之初是空的
    let fragment = document.createDocumentFragment()
    let {length} = this
    
    for(let i=0; i< length; i++) {
      let li = document.createElement('li')
      // 是不是选中状态
      if ( i === this.options['index']) {
        li.className = this.options['activeName']
      }
      li.innerHTML = this.data[i]['title']
      fragment.append(li)
    }

    ul.appendChild(fragment)
    this.el.appendChild(ul)
  },
  
  bindHandler() {
    let lis = this.el.getElementsByTagName('li')
    
    for(let i=0; i< this.length; i++) {
      let item = lis[i]
      item.onclick = () => {
        // this 指向 Tab实例
        console.log('this', this)
        // 清空其他选项的 class
        for(let j=0; j <this.length; j++) {
          lis[j].className = ''
        }
        
        item.className = this.options['activeName']
      }
    }
  }
}
