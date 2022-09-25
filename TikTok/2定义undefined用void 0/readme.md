+ undefined不是关键字 是window的只读属性
+ 所以大厂里不允许写  var a = undefined
+ 而是  var b = void 0
+ 实质一样，为了避免赋值导致的一些列错误，严谨一些
