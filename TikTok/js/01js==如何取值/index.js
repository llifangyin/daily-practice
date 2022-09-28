//  阿里、百度、腾讯面试题

// ？ 位置怎么写 才能输出true


/* var a = ?;
console.log(
    a == 1 &&
    a == 2 &&
    a == 3
);
 */

/*  

题解： 考察 == 如何取值

            --> undefined == null  
     特殊   -->    NaN != NaN

==   类型相同 -->  比较值

     类型不通--> 均为原始类型 --> 转化为数字比较
            -->  原始和对象  --> 对象转为原始比较 -->先调用valueOf-->若无法转换成原始值，再调用toString

*/


var obj = {}
console.log(obj.valueOf()); //{}
console.log(obj.toString()); // [object Object]
console.log(obj == '[object Object]'); // true
console.log(obj == 1); //false

// 综上
var a = {
    n:1,
    valueOf:function(){
        return this.n ++
    }
}
console.log( a == 1 &&  a == 2 && a == 3); // true



// 拓展   b == 1 &&  b == 2 && b == 4 成立


// 找到对应规则？ 任意值呢
var b = {
    n:0,
    valueOf:function(){
        this.n ++
        return  Math.pow(2,this.n -1) 
    }
}
console.log( b == 1 &&  b == 2 && b == 4); // true