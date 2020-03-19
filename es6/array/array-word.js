var arr = [ 1, 2, 3, 4, 5 ] // 转换为 `[ 'a1', 'b2', 'c3', 'd4', 'e5' ]`
arr.map(item => {
	let word = String.fromCharCode(96 + item)
	return word + item
})


var arr = [ 1, 2, 3, 4, 5 ] // 转换为 `[ 1, 4, 9, 16, 25 ]`
arr.map(item => {
	return item * item
})


// 3. 用 `Array.prototype.map` 方法并将数组 `[ 0, 0, 0, 0, 0 ]` 转换为 `[ 'A', 'B', 'C', 'D', 'E' ]`
var arr = [ 0, 0, 0, 0, 0 ]
arr.map((item, i) => {
	return String.fromCharCode(65 + i)
})


var arr = [ 1, 2, 3, 4, 5 ] // 提取返回 `[ 2, 3, 4 ]`
arr.slice(1, arr.length - 1)


// 输出26个英文字母
Array.from({length: 26}, (item, i) => String.fromCharCode(65 + i))


Array.from(new Array(26), (item, i) => String.fromCharCode(65 + i))


// 投票结果为如下 [ 1, 2, 3, 2, 2, 3, 1, 4, 4, 1, 2, 1, 1, 3, 4 ]，请统计投票结果并找出票数最多的选项
const votes = [1, 2, 3, 2, 2, 3, 1, 4, 4, 1, 2, 1, 1, 3, 4]
const votesCountBy = _.countBy(votes)
_.maxBy(_.entries(votesCountBy), o => o[1])[0]


/*假设某一时间记录软件记录下一个人一天 24 小时中每一个小时的工作状态，
	其中分别以范围为 1 ~ 8 的自然数标识，1 为生产力最差的程度，而 8 则为生产力最佳的状态。
	而该软件记录了某人一天的数据为
	[ 1, 1, 1, 1, 1, 1, 1, 1, 6, 7, 8, 4, 3, 7, 8, 8, 6, 6, 4, 3, 3, 3, 1, 1 ]。
	假设区间 1 ~ 3 为生产力较低，4 ~ 5 为生产力一般，6 ~ 8 为生产力较高。
	请统计并分析这份数据中一天的工作状态
*/
