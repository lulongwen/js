
let fruit = "lemon"
let food = 'rice'
let xigua = 'watermolen'

// export let fruit = 'lemon';

let fruit = "lemon";
let food = 'rice';

// export let fruit = 'lemon';
// export 导出，可以导出的不只是变量，还有函数，类，等其他东西


// 重命名导出与导入的名字
export default function sweet(fruit, food){
  console.log(`今天的晚餐是：${fruit} 和 ${food}`);
};


/* 默认导出
  function sweet(fruit, food){
      console.log(`今天的晚餐是：${fruit} 和 ${food}`);
  };

  export{sweet as default }
*/


let fruit = "lemon";
let food = 'rice';

// export let fruit = 'lemon';
// export 导出，可以导出的不只是变量，还有函数，类，等其他东西
// 重命名导出与导入的名字
function sweet(fruit, food){
  console.log(`今天的晚餐是：${fruit} 和 ${food}`);
};

//            重命名 sweet 为 tiande
export{fruit, food, sweet as tiande }



// export 导出，可以导出的不只是变量，还有函数，类，等其他东西
export {fruit, food}

