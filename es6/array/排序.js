// sort 排序
const fruits = [
  {name:"banana", amount: 2},
  {name:"apple", amount: 4},
  {name:"pineapple", amount: 2},
  {name:"mango", amount: 1}
];

const sortBy = key => {
  return (a, b) => (a[key] > b[key]) ?
    1 : (b[key] > a[key]) ? -1 : 0;
}
fruits.sort(sortBy('name'));
/**
 * [
  {name: "apple", amount: 4},
  {name: "banana", amount: 2}
  {name: "mango", amount: 1},
  {name: "pineapple", amount: 2}
 ]
 */


