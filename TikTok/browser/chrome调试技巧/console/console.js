// 1. 打印调试信息

// Default levels 选中verbose时才会出现
// console.debug(111)

// 2.1 打印信息
// console.log(111)

// 2.2 信息(chrome跟log一样)
// console.info('infomation')

// 2.3 表格
// 对象数组
// let arr = [{name:'ddd',age:11},{name:'eee',age:33},{name:'ccc',age:44}];
// console.table(arr)

// 2.4 分组
// const label = 'package vue'
// console.group(label)
// console.log('vue-router');
// console.log('vuex');
// console.log('vue-compiler');
// let i = 0
// while(i<4){
//     console.log(i);
//     i++
// }
// console.groupEnd(label)
// // console.groupCollapsed(label)

// 2.5 对象结构
// console.log(document.body); // dom结构
// console.dir(document.body) //对象结构

// 2.6 计时
// console.time('loop')
// var i = 0
// while(i<4){
//     i++
// }
// console.timeEnd('loop')

// 2.7 计数
// var i = 0
// while(i<4){
//     i++
//     console.count('count')
// }
// console.countReset('count')

// 2.8 堆栈(调用)
// function b(){
//     console.trace()
// }
// function a(){
//     b()
// }
// a()

// 2.9 断言

// function sum(a,b){
//     return a + b
// }
// console.assert(sum(1,2)==4)//Assertion failed:

// 3. 打印警告(写库的时候用)
// console.warn('this is a warning')

// 4.打印错误
// console.error('this is an error')


// 5.清空样式
// console.log(111);
// console.log(222);
// console.clear()
// console.log(333);

// 6.带样式的消息
// const style = `
// padding:5px;background-color:#90442e;color:white;font-style:italic;font-size:2rem;`
// console.log('%cthis is a log with style',style)
