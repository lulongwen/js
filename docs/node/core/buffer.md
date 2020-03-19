

## 字节
* 1024b = 1k
* 8bit【8个二进制】= 1b
* 一个汉字 3个bit
* 一个字节 转换为 十进制是 255
	* 2的8次方 - 1 
* 一个字节最大转换为 16进制是 ff

```
let sum = 0
for(let i =1; i<=8; i++) {
	sum += Math.pow(2, i-1)
}

// sum 255
console.log('sum',sum)

```

https://www.cnblogs.com/liujinyu/p/7341707.html