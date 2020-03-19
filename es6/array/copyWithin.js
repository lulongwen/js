/**
 * copyWithin 在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
 * 然后返回当前数组， 修改了原数组
  target （必需）：从该位置开始 替换数据。
  start （可选）：从该位置开始 读取数据，默认为 0 如果为负值，表示倒数。
  end （可选）：到该位置前停止 读取数据，默认等于数组长度。如果为负值，表示倒数

  arr.copyWithin(target)
    0 为基底的索引，复制序列到该位置。
    如果是负数，target 将从末尾开始计算。
    如果 target 大于等于 arr.length，将会不发生拷贝。
    如果 target 在 start 之后，复制的序列将被修改以符合 arr.length

  arr.copyWithin(target, start)  
    0 为基底的索引，开始复制元素的起始位置。
    如果是负数，start 将从末尾开始计算。
    如果 start 被忽略，copyWithin 将会从0开始复制

  arr.copyWithin(target, start, end)
    end array.length， 如果为负值，表示倒数
    arr.copyWithin(目标索引, [源开始索引], [结束源索引])
 */
var copy = [1,2,3,4,5];
    
// 替换的位置从 0开始，读取的数据从第2个开始读取， 第四个结束
// 2 索引是3, 4 索引是 5， 获取的数据时 3,4 
var copy1 = copy.copyWithin(0,2,4); // [3,4,3,4,5]

copy1 === copy // true


var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2, 0, 2);

// 从第二个开始，复制2个
// ["Banana", "Orange", "Banana", "Orange", "Kiwi", "Papaya"]