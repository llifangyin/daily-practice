+ undefined不是关键字 是window的只读属性
+ 所以大厂里不允许写  var a = undefined
+ 而是  var b = void 0
+ 实质一样，为了避免赋值导致的一些列错误，严谨一些
```js
  // 函数作用域
function test(){

        var undefined = 2
    console.log(undefined)//2
    var a = undefined
    console.log(a);//2
}
test()
```
