// 封装数组操作
export default {
	// 末尾添加
	append(arr, ...element) {
		arr.push(...element)
		return arr
	},

	// 头部添加
	prepend(arr, ...element) {
		arr.unshift(...element)
	},

	// 插入元素
	insert(arr, index, ...element) {
		arr.splice(index, 0, ...element)
	},

	// sum 求和
	sum(arr) {
		return arr.reduce((prev, next) => {
			return prev + next
		})
	},

	diff(arr) {
		let temp = []
		arr.reduce((prev, next, item) => {
			temp.push(a - b)
			return b
		})
	},

	dist(arr) {
		let temp = []
		arr.reduce((prev, next, item) => {
			temp.push(a < b ? b - a : a - b)
			return b
		})
	},


	// multi
	multi(arr) {
		return arr.reduce((prev, next) => {
			return prev * next
		})
	},

	// 2个数组是否相等
	equals (arr, arr2) {
    var a1 = JSON.stringify(arr2)
    var a2 = JSON.stringify(arr)

    return a1 === a2
	},

	isEmpty: function(arr) {
    return arr.length ? true : false;
  },
  isNodeList: function(arr){
    return  /^\[object (HTMLCollection|NodeList)\]$/.test(Object.prototype.toString.call(arr));
  },

	clone: function(arr) {
    if(this.isNodeList(arr)){
      return [].slice.call(arr);
    }
    return arr.slice();
  },
  getLastItem: function(arr) {
    return arr.length ? arr[arr.length - 1] : null
  },

  clear(arr) {
  	return arr.length = 0
  },

  remove: function(arr, item) {
    return arr.filter(function(i) {
      return i != item;
    });
  },
  // 删除
	remove2(arr, index) {
		arr.splice(index, 1)
		return arr
	},

  removeFirstItem: function(arr) {
    this.isNodeList(arr) ? [].shift.call(arr) : arr.shift();
    return arr;
  },

  removeLastItem: function(arr) {
    this.isNodeList(arr) ? [].pop.call(arr) : arr.pop();
    return arr;
  },

  findObjectInarr: function(arr, attribute, value){
    var auxArr = this.isNodeList(arr) ? [].slice.call(arr) : arr;
    return auxArr.filter(function(item){
      return item[attribute] == value;
    })
  },

  addAsFirstItem: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  addAsLastItem: function(arr, item) {
    arr.push(item);
    return arr;
  },

  inarr: function(arr, item){
   for(i=0; arr.length >= i; i++){
  		if(item.toString() === arr[i]) {
	  	  return true;
	    }
    }
    return false;
  },

  replaceItem: function(arr, indexOrItem, newItem) {
    if (typeof indexOrItem == "object") return TypeError('The method still does not work with objects');
    var isIndex = Number.isInteger(parseInt(indexOrItem));
    if (isIndex) {
      arr[indexOrItem] = newItem;
    } else {
      arr[arr.indexOf(indexOrItem)] = newItem;
    }
    return arr;
  },

  reverse: function(arr) {
    return arr.reverse();
  },

  sortAlpha: function(arr) {
    var error = -1;
    for (var i in arr) {
      if (typeof arr[i] != "string") {
        error++;
      }
    }
    if (error > -1) return TypeError('There are non-alphanumeric elements');
    return arr.sort();
  },

  sortNumeric: function(arr) {
    var error = -1;
    for (var i in arr) {
      if (typeof arr[i] != "number") {
        error++;
      }
    }
    if (error > -1) return TypeError('There are no numerical elements');
    return arr.sort(function(a, b) {
      return a - b;
    });
  },

  merge: function(arrOne, arrTow) {
    return arrOne.concat(arrTow);
  },

  getListBy: function(arr, field, op, max) {
    var ope = {
      '+': function(a, b) { return a + b },
      '-': function(a, b) { return a - b },
      '<': function(a, b) { return a < b },
      '>': function(a, b) { return a > b },
      '<=': function(a, b) { return a <= b },
      '>=': function(a, b) { return a >= b }
    };
    return arr
      .filter(function(a) {
        return ope[op](a[field], max);
      })
      .map(function(a) {
        return {
          name: a.name,
        }
      });
  }
}
