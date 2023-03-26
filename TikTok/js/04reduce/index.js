
// Array.prototype.reduce

// reduce方法对对数组的每个元素按序执行一个由你提供的reducer函数
// 每一次运行reducer会将先前元素的计算结果作为参数传入
// 最后将其结果汇总为单位返回的值

// 第一次执行回调函数时，不存在上一次的计算结果。如果回调函数从数组索引为0的元素开始执行
// 则需要传递初始值，否则数组索引为0的元素会作为初始值initialValue，迭代器将会从第二个元素开始执行

// exp：
const arr = [1, 2, 3, 4]
const initValue = 2
// 有初始值执行length次
const sumWithInitValue = arr.reduce(
    (pre, cur,i,arr1) => {
        console.log(pre,cur,i,arr1,'pre1');
        return pre + cur
    },
    initValue
)
console.log(sumWithInitValue);
// 没有初始值 执行length-1次
const sumNoInitValue = arr.reduce(
    (pre,cur,i,arr1)=> {
        console.log(pre,cur,i,arr1,'pre2');
        return pre +cur
    }
)

console.log(sumNoInitValue);

// 语法
// 箭头函数
// reduce((prev,curr,currentIndex,array)=>{},initValue)

// 回调函数
// reduce(callbackFn,initValue)

// 内联回调函数
// reduce(function(prev,curr,currentIndex,array),initValue)

// previousValue 上次的计算结果，指定initValue则为它，否则为第一位
// currentValue 数组正在处理的元素，第一次调用，指定初始值为索引为0的值，没有指定为索引为1的值
// currentIndex currentValue的index
// arr 遍历的当前数组
