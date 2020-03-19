# JS eventLoop

1. 浏览器中的事件环
    1. 先执行主栈中的代码，执行后会清空微任务队列
    2. 取一个宏任务放入执行栈中执行，再去清空微任务队列
    3. 再去取第二个宏任务执行，不断循环这个过程    

2. 执行事件环的
    1. 主栈：队列，栈
    2. callback queue 队列，一般是在微任务之前执行
    3. 微任务：有微任务队列，Promise
    4. 宏任务：有宏任务队列，setTimeout
    4. 函数调用立即执行

3. 宏任务有那些？微任务有哪些
    1. 微任务 micro-task
        - Promise
        - MutationObserver
        - MessageChannel 消息通道
        
    2. 宏任务 macro-task
        - setTimeout
        - setInterval
        - setImmediate IE特性

4. `Vue.$nextTick()` 就是用 `MutationObserve, setImmediate, setTimeout` 实现的

## 1 JS 的特点

> 单线程 > 进程

1. js是单线程（主线程是单线程）
    - ajax， setTimeout 也是开了一条线程，完成后再主线程执行
    - webworker，不支持DOM操作，子线程只负责一些复杂的计算
    
2. 浏览器渲染的时候，有2个线程：JS线程，UI线程
    - 其他语言都会有多线程的概念，多线程涉及到 锁🔐的概念
    - 每个线程也会占用内存，多线程并发靠的是：切换上下文
    - 线程池维护
    
3. 进程：计算机分配任务最小的单位，一般是：一个进程包含着线程
    - 为了代码执行的可靠性，一般我们会使用多进程
    - 一个进程挂了，还有其他进程存在
    - CPU分多少核，4核，8核，多进程也是为了充分利用CPU
    
    
    
    
    
    
    
    
    
    
    
    
    
