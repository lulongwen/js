# JS 面向对象编程 OOP


> JS面向对象知识点总结

1. 对象，类，实例
2. 构造函数模式和原型及原型链
3. instanceof 数据类型检测
4. hasOwnProperty 是不是自身的属性
5. 类的继承
  * 原型继承
  * call继承
  * 寄生组合继承
  * ES6 中的 extend继承
6. 基于内置类的原型扩展方法


## 什么是面向对象，以及在实战项目中的应用
1. 组件，插件，类库等封装都是基于创建类完成的
2. 看过部分 jQuery源码
3.  自己封装过一些组件或插件，例如：
  * 选项卡
  * 轮播图
  * 模态框
  * 拖拽等项目中常用的插件
4. Vue & React 都是基于面向对象开发的，用的时候都是创建这些类的实例


## ES6 面向对象
```
// 声明构造函数
class Person {
	constructor(age, name) {
		this.age = age
		this.name = name
	}
}

let lucy = new Person(18, 'lucy')


// 继承 extend
class Student extends Person {
	constructor(like, name) {
		super(age, age)
		this.name = name
		this.like = like
	}
}
```



```
工具
	webstorm 特色
	功能
	使用技巧
	常用快捷键

调试
	firefox调试
	chrome
	webstorm + firefox
		安装 jetBrains firefox 
	webstorm + chrome
```



# 1 Javascript面向对象基础
	+ JS是基于面向对象的语言
1. 用定义函数的方式定义类
	+ 面向对象思想中，最核心的概念之一就是类
	+ 一个类表示了具有相似性质的一类事物的抽象，通过实例化一个类，可以获取该类的一个实例，即对象，也就是实例化对象
	```
	function Init(){
		// 类成员的定义及构造函数
	}
	Init 既是一个函数也是一个类，可以将它理解为类的构造函数，负责初始化工作

	可以把一个函数理解成一个类，function(){ }
	```　

2. 使用 new 操作符获得一个实例化对象
1. 类和对象的区别
	+ 类是创建对象的模板，类是个模板，对象是这个类的实例

2. new 操作符
	+ new Date(); 表示创建一个日期的对象，Date就是表示日期的类，知识这个类是有javascript内部提供的，而不是由用户定义的
	+ new 操作符不仅对内部类有效，对用户定义的类也同样有效，对于一个函数，也可以用new来获取一个实例化对象
	```
	function Init(name){
		// 类成员的定义及构造函数
	}
	var title =new Init();

	抛开类的概念，从代码形式上看，Init就是一个函数，
	那么是不是所有的函数都是用new 来操作呢? 是的，
	javascript中，函数和类时一个概念，
	当对一个函数进行new操作时，就会返回一个对象，如果这个函数中没有初始化类成员，那么就会返回一个空对象，例如，定义一个初始化函数
	funciton Init(name){
		this.name = name;
	};
	// 通过new 一个函数获得一个对象
	var title =new Init('longwen');
	title.name;
	console.log( typeof title )

	从运行结果来看，title获得了一个对象的引用；
	当new一个函数时，这个函数就是所有代表类的构造函数，其中的代码被看做，为了初始化一个对象，用于表示类的函数，也称之为构造器。

	类说白了就是一种数据结构，是静态的
	对象是动态的，是类的一个实例

	```

3. 使用 [] 引用对象的属性和方法
	+ 在JS中，每个对象可以看做是多个属性（方法）的集合，引用一个属性（方法）很简单，如
	对象名.属性(方法)名
	+ 还可以用方括号的引用： 对象名["属性(方法)名"]
		+ 特殊情况下 用 []， 一般用 . 的方法
	+ 注意：这里的方法名和属性名是一个字符串，不是点 . 后面的标识符，例如
	```
	var arr = new Array(); 
	// 为数组添加一个元素
	arr.push('abs');
	arr['push']('abc');

	// 获取数组length
	var len =arr.length;
	var len =arr['length']
	console.log(len) 

	JS对象就是一组属性和方法的集合。
	这种用法适合不确定具体要引用那个属性（方法）的情况，
	例如一个对象用于表示用户资料，用一个字符串表示要使用的那个属性，就可以用这种方式来引用。
	function User(){
		this.age = 22;
		this.love = "love";
	};
	// 创建 user对象
	var user = new User();

	```


4. 动态添加，修改，删除对象的属性和方法
	+ 如何为一个对象添加，修改，或者删除属性和方法？
	+ 其他语言中，对象一旦生成，就不可更改，要为一个对象添加，修改成员必须要在对应的类中修改，并重新实例化，程序也必须重新编译。
	+ JS提供了灵活的机制来修改对象的行为，可以动态添加，修改，删除属性和方法
		+ 例如，先用类 Object来创建一个空对象 user
	```
	var user = new Object();

	// 1 添加属性
	这时 user对象没有任何属性和方法，可以为它动态的添加属性，例如
	user.name = "longwen";
	user.age = "23";
	user.sex = "male";
	通过上述语句，user对象具有了三个属性： name，age和sex，下面输出这三个语句
	console.log(user.name);
	console.log(user.age);
	console.log(user.sex);
	有代码运行效果可知，三个属性已经完全属于user对象了

	// 2 添加方法
	添加方法的过程和添加属性类似
	user.alert = function(){
		alert('my name is:'+ this.name);
	};
	这就为user对象添加了一个方法 alert，通过执行它，弹出一个对话框显示自己的名字
	user.alert();

	// 3 修改属性和方法
	修改一个属性和方法的过程就是用新的属性替换旧的属性，例如
	user.name = "love";
	user.alert = function(){
		alert('hello,' + this.name)
	};
	这样就修改了user对象的name属性值和alert方法

	// 4 删除属性和方法
	删除一个属性和方法过程也很简单，就是将其设置为 undefind 或 null；
	user.name = null;
	user.alert = undefined;
	这样就删除了name属性和alert方法

	还有就是用 delete 方法
	delete user.name

	在添加，修改，删除属性的时和引用属性相同，也可以采用 [] 语法
	user['name'] = "love"
	```			

5. 使用 {} 语法创建无类型对象
	+ {} 快速创建一个无类型对象，这个对象无法重复利用。
	+ 传统的面向对象语言中，每个对象都会对应到一个类，刚提到的this指针时提到，JS中的对象其实就是属性(方法)的一个集合。并没有严格意义上类的概念。
	+ 所以JS提供了一种简单的方式来创建对象，即花括号 {} 语法
	+ 缺点：不能重复利用，如果要复用，就要用类来创建对象。
	```
	{
		property1: statement,
		property2: statements,
		...
	}
	通过{} 括住了多个属性或方法及其定义（这些属性或方法用逗号隔开），来实现对象的定义
	这段代码就直接定义了具有N个属性或方法的对象，其中属性名和其定义之间用冒号 : 隔开，
	例如：
	<script>
		var obj ={}; // 定义一个空对象
		var user ={
			name: "jack", // 定义name属性，初始化为 jack
			favoriteColor: ['red','black','white'] //定义了颜色数组
			hello: function(){
				// 定义了hello 方法
				alert('hello,'+ this.name);
			},
			sex: 'boy' //定义了性别，初始化为 boy
		};

		// 调用user对象的方法 hello
		user.hello();
	</script>

	var obj ={}; // 定义了一个无类型对象 obj，等价于 var obj = new Object();
	
	还可以使用字符串最为属性（方法名），例如
	var obj ={"001": "abc"}
	这样就给obj 定义了一个属性 "001"，这不是一个有效的标识符，
	所以要引用这个属性必须使用 [] 语法
	obj["001"]

	由此可见，无类型对象提供了一种创建对象的简便方式，
	无类型对象以紧凑和清晰的语法将一个对象体现为一个完整的实体，
	而且也有利于减少代码的体积，这对JS代码来说非常重要，
	减少体积意味着提高了访问速度。
	```


6. prototype 原型对象
	+ prototype 对象是实现面向对象的重要机制，每个函数（funciton）其实也是一个对象，他们对应的类是 "Function"；
	+ 但是 每个function(){} 函数对象都具有一个子对象 prototype，prototype表示了该函数的原型；
	+ 而函数也是类，prototype就是表示了一个类的成员的集合；
	+ 当通过 new来获取一个类的对象时，prototype对象的成员都会成为实例化对象的成员。
	+ 既然prototype是一个对象，可以使用前面介绍的方法对其进行动态的修改，一个简单的demo
	```
	// 定义了一个空类
	function Task(){
		// empty
	};

	// 对类的prototype对象进行修改，增加方法 method
	Task.prototype.method = function(){
		alert('It\'s a test method')
	};
	// 创建task类的实例化对象
	var task = new Task();

	// 调用task的方法 method
	task.method();
	```



---

# 2 深入认识Javascript中的函数
1. 认识函数对象 Function Object
	+ 函数是进行模块化程序设计的基础，编写复杂的Ajax应用程序，必须对函数有更深入的了解；
	+ JS中的函数不同于其他语言，每个函数都是作为一个对象被维护和运行的；
	+ 通过函数对象的性质，可以很方便的将一个函数赋值给一个变量或者将函数作为参数传递，先看下函的使用语法
	```
	function fun1(){ ... }

	var fun2 = function(){ ... }

	var fun3 = function fun(){ ... }

	var fun6 = new  Function();

	这些都是声明函数的正确语法，JS中的函数和其他语言中常见的函数或之前介绍的函数定义方式有很大的区别；
	那么在JS中为什么能这么写，它所遵循的语法是什么呢？
	```

	+ 可以用function关键字定义一个函数，并为每个函数指定一个函数名，通过函数名来进行调用，
	+ 在JS解释执行时，函数都是被维护为一个对象，这就是要介绍的函数对象（Function Object）
	+ 函数对象与其他用户所定义的对象有着本质的区别，这一类对象被称之为 内部对象，
		+ 例如： 日期对象 Date， 数组对象 Array，字符串对象 String，都属于内部对象
	+ 这些内置对象的构造器是有JS本身所定义的
		+ 通过执行new Array() 这样的语句，返回一个对象，JS内部有一套机制来初始化返回的对象，而不是有用户来指定对象的构造方式。

	+ JS中，函数对象对应的类型是Function，正如数组对应的类型是 Array，日期对象对应的类型是 Date一样，
	+ 可以通过new Function() 来创建一个函数对象，也可以通过 function关键字来创建一个对象，
	+ 为了便于理解，我们比较函数对象的创建和数组对象的创建，先看数组对象，下面的2行代码都是创建数组对象的。
	```
	var arr =[];  
		// 等价于
	var arr= new Array();

	同样，下面的2段代码也是创建函数的
	function fun(a,b){
		return a+b;
	}
		// 等价于
	var fun = new Function('a','b','return a+b');

	通过和构造数组对象语句的比较，可以清楚的看到函数对象本质，前面介绍的函数声明时上述代码的第一种方式，
	而在解释器内部，当遇到这种语法时（new Function() ），就会自动构造一个Function对象，将函数作为一个内部对象来存储和运行。
	从这里可以看到，一个函数对象名称（函数变量）和一个普通变量名称具有同样的规范，

	都可以通过变量名来引用这个变量，但是函数变量名后面可以跟上括号和参数来进行函数调用；
	用 new Function() 的形式来创建一个函数不常见，因为一个函数体通常会有多条的语句，如果将他们以一个字符串的形式作为参数传递，代码可读性差，下面介绍下其使用方法：

	var fun =new Function(p1,p2,...,body);
	参数的类型都是字符串，p1到pn表示所创建函数的参数名称列表，
	body表示所创建函数的函数体语句，
	fun就是所创建函数的名称
	可以不指定任何参数创建一个空函数，不指定funName（函数名称）创建一个匿名函数，当然那样的函数是没有任何意义的。

	注意的是：p1到 pn是参数名称的列表，即p1不仅能代表一个参数，它也可以是一个逗号隔开的参数列表，下面定义的函数都是等价的
	new Funciton('a, b, c', 'return a+b+c');
	new Function('a', 'b', 'c', 'return a+b+c');
	new Function('a,b', 'c', 'return a+b+c');

	JS 中引入 Function类型并提供 new Function() 这样的语法是因为函数对象添加属性和方法就必须借助 Function这个类型。
	函数的本质是一个内部对象，有JS解释器决定其运行方式，
	通过上述代码创建的函数，在程序中可以使用函数名进行调用，本节开头列出的函数定义问题也得到了解释。

	注意：可以直接在函数声明后面加上括号就表示函数创建完成后，立即进行函数调用，例如：
	var sum = function(a,b){
		return a+b;
	}(2,3);
	alert(sum);

	这段代码会显示变量sum的值等于5，sum是表示返回的值，而不是创建的函数。
	因为括号() 比等号 = 有更好的优先级，这样的代码可能并不常用，但当用户想在很长的代码中进行模块化设计或者想避免命名冲突，倒是一个不错的解决方法。
	需要注意的是，尽管下面2中创建函数的方式是等价的
	function funName(){
		// 函数体
	}
		//等价于

	var funName = function(){
		// 函数体
	}

	但前面一种方式创建的是有名函数，而后面创建的是一个匿名函数，只是让一个变量指向了这个匿名函数。
	在使用上仅有一点区别：

	对于有名函数，可以出现在调用之后再定义；
	而匿名函数，必须在调用之前就完成定义，否则 报错，例如：
	fun();
	var fun =function(){
		alert('匿名函数')
	}
	这段语句，将产生fun未定义的错误，
	由此可见，尽管JS是一门解释性语言，但JS会在函数调用时，检查整个代码中是否存在相应的函数定义，这个函数名知识通过 function funName(){ ... }， 形式定义时才会有效，而不能是匿名函数。
	``` 

2. 函数对象和其他内部对象的关系
	+ 除了函数对象，还有很多内部对象，比如，Object，Array，Date，RegExp，Math， Error。
	+ 这些名称实际上表示一个类型，可以通过new 操作符来返回一个对象，然而函数对象和其他对象不同，当用typeof 得到一个函数对象的类型时，它仍然会返回字符串 "function"，而typeof一个数组对象和其它对象时，它会返回字符串"object"，下面的代码示例了typeof不同类型的情况
	```
	console.log( typeof Function );
	console.log( typeof new Function() );
	console.log( typeof Array );
	console.log( typeof Object );
	
	console.log( typeof new Array() );
	console.log( typeof new Date() );
	console.log( typeof new Object() );

	运行代码来看，前4条语句都是 "function"，而后面3条语句则显示 "object"，可见new 一个Function实际上返回一个函数。这与其他的对象有很大的不同。

	其他的类型Array，Object等都会通过new 操作符返回一个普通对象。尽管函数本身也是一个对象，但函数与普通的对象还是有区别的，因为函数同时也是对象的构造器，也就是说， 可以 new一个函数来返回一个对象。
	所有typeof 返回 "function" 的对象都是函数对象，也称这样的对象为构造器（constructor），

	因而，所有的构造器都是对象，但不是所有的对象都是构造器。
	既然函数本身也是一个对象，他们的类型是function，联想到C++，java等面向对象语言的类定义，可以猜测到 Function类型的作用所在，
	那就是可以给函数对象本身定义一些方法和属性，
	借助于函数的prototype 对象，可以很方便地修改和扩充 Function类型的作用所在，那就是可以给函数对象本身定义一些方法和属性，
	例如，下面扩展了函数类型 Function，为其增加method1方法，作用是弹出对话框显示 "function":

	Function.prototype.method1 = function(){
		alert("function")
	};

	function fun1(a,b){
		return a+b;
	}
	fun1.method1();  // function
	fun1.method1.method1(); // function
	fun1.method1.method1.method1(); // function

	注意最后一句： fun1.method1.method1(); 它调用了method1这个函数对象的method1方法，
	虽然看上去有点容易混淆，但仔细观察一下语法还是很明确的：
	这是一个递归的定义。

	因为，menthod1本身也是一个函数，所以它同样具有函数对象的属性和方法，所有对Function类型的方法扩充都具有这样的递归性质。

	Function是所有函数对象的基础，
	而 Object则是所有对象（包括函数对象）的基础，在JS中，任何一个对象都是Object的实例，
	因此可以修改Object这个类型来让所有的对象具有一些通用的属性和方法，修改Object类型通常是通过prototype来完成的：
	Object.prototpe.getType = function(){
		return typeof this;
	};

	var arr = new Array();
	function fun1(a,b){
		return a+b;
	}
	console.log( arr.getType() );  // "object"
	console.log( fun1.getType() ); // "function"

	上面的代码为所有的对象添加了getType的方法，作用是返回该对象的类型。

	```

3. 将函数作为参数传递
	+ 前面已经介绍了函数对象的本质，每个函数都被表示为一个特殊的对象，可以方便的将其赋值给一个变量，再通过这个变量名进行函数调用。
	+ 作为一个变量，它可以以参数的形式传递给另一个函数，这在前面介绍JS事件处理机制中已经看到过这样的用法，
	+ 例如，下面的程序将fun2作为参数传递给fun1
	```
	function fun1(theFun){
		theFun();
	};

	function fun2(){
		alert('OK');
	}
	fun1(fun2);

	最后一条语句中，fun2 作为一个对象传递给fun1的形参theFun，再有fun1内部进行theFun的调用。
	事实上，将函数作为参数传递，或者将函数赋值给其他变量是所有事件机制的基础。

	例如，如果需要在页面载入完成时，进行初始化的工作，可以先定义一个init的初始化函数，
	再通过window.onload = init; 语句将其绑定到页面载入完成的事件。
	这里的init就是一个函数对象，它可以加入window的onload事件列表。
	```

4. 传递给函数的隐藏参数 arguments
	+ 

6. 深入认识 javascript中的 this指向

---

# 3 Javascript中类的实现
- 理解类的实现机制
- 使用prototype对象定义类成员
- javascript类的设计模式

# 4 Javascript中的公有成员，私有成员，和静态成员
- 实现类的公有成员
- 实现类的私有成员
- 实现类的静态成员
	+　类的静态方法，对所有类的实例都是共享的

# 5 Javascript的反射机制
- 什么是反射机制
- 在JS中利用for in 实现反射
- 使用反射来传递样式参数

# 6 Javascript中的继承
- 利用共享 prototype实现继承
- 利用反射机制和 prototype实现继承
- prototype类的继承
- prototype.js 源码解析
	+ prototype.js中类的继承实现示例

# 7 Javascript中抽象类与虚方法
- 什么是JS抽象类与虚方法
- 在JS中实现抽象类
- 使用抽象类的示例

# 8 Javascript事件设计模式
- 事件设计概述
- 最简单的事件设计模式
- 给事件处理程序传递参数
- 使自定义事件支持多绑定

# 9 Javascript面向对象实例
- 使用面向对象处理 cookie
	+ 需求分析
	+代码实现

# 10 javascript混淆（加密）与性能优化



---
## 为什么学习JS
- 如果三年前你问我应该学什么语言，我会告诉你是Java，C#；
- 如果六年前呢，我会说是PHP。如果你现在想学一门语言的话，那么我说，你应该学习JavaScript
	+ 每一位Web开发人员都应该学习JavaScript，目前推出的许多新技术都支持这个观点；
	+ 不是所有公司都用Ruby，也不是所有公司都用.NET；
	+ 绝大多数时候，这些公司都需要深入理解JavaScript的人。微软、Facebook、苹果还有谷歌他们都用javaScript 做出了非常优秀的产品；
	+ 而这之后的唯一原因就是，JavaScript太普及了。你可以使用JavaScript为各种人做出令人惊叹的作品。你可以在任何一台机器上立刻开始工作。
	+ 当人们谈到HTML5的时候，议论的内容大多都是JavaScript。
- javascript书籍推荐
	+ javascript DOM编程艺术
	+ Javascript权威指南


## 为什么要学习面向对象
- 想进一步提升自己的JS水平
- 对JS的应用有更深层次的了解
- 学习JS调试，性能优化，及一些优秀前端框架的应用
- 自己能动手写一个基于OOP的框架
	* 注重动手能力的培养与代码实战
- 如果现在你想学习一门语言的话，就应该学习JavaScript。
- 对于后继jquery,easyui,extjs等富客户端的学习打好基础


## 为什么要用面向对象技术
- JS准确来说应该算是函数式语言
- 为什么要使用面向对象的技术？
	+ 因为面向对象的封装、继承、多态等特性能提高编程效率，可复用性等，这一点在开发大中型项目里体现的尤为明显
	+ 当然程序运行的效率其实跟你使用的是面向过程还是面向对象无关，而是跟你写的具体代码或是应用的框架有关。
	+ 如果只是一段简单的操作DOM的JS，就完全没有考虑什么OOP；
	+ 要用OOP，那肯定是用了OOP写出更健壮，更具可维护性，更高效的代码，而不是因为觉得OOP更高级，更显技术才用。

## 创建应用
- 创建一个大型的APP不是去写很多代码，而是将你的应用程序，打碎到很小的模块，然后再组装它；
- 车轮转起来了，一步步往前走，才有解决问题的可能，呆在原地只会陷入死循环
- 无论是你自己造轮子，还是基于开源框架去解决这些问题，只要你解决了这些问题，你也就踏入了，前端开发的大门。
- 写的了代码，带的了团队，做的了工程师，也登起架构师 

