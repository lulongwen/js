Math.ceil()  //向上取整。

Math.floor()  //向下取整。

Math.round()  //四舍五入。

//0.0 ~ 1.0 之间的一个伪随机数。【包含0不包含1】 
Math.random() //比如0.8647578968666494

Math.ceil(Math.random()*10)      // 获取从1到10的随机整数 ，取0的概率极小。

Math.round(Math.random())   //可均衡获取0到1的随机整数。

//可均衡获取0到9的随机整数
Math.floor(Math.random()*10)

/**
	基本均衡获取0到10的随机整数，其中获取最小值0和最大值10的几率少一半
	因为结果在0~0.4 为0，0.5到1.4为1...8.5到9.4为9，9.5到9.9为10。所以头尾的分布区间只有其他数字的一半
*/ 
Math.round(Math.random()*10) 




// 乘方
var r = 2
area = 3.14 * r * r

area = 3.14 * Math.pow(r, 2)

area = 3.14 * r ** 2
var circle = r => Math.PI * (r ** 2)

function circleArea(r) {
	return Math.PI * r * r
}

var circleArea = r => Math.PI * r * r;

var squareArea = s => s * s;
