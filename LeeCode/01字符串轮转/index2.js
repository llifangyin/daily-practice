var s1 = "waterbottle", s2 = "erbottlewat"
var isFlipedString = function(s1, s2) {
    // let str = s2 +s2
    // let i = str.indexOf(s1)
    // let str1 = str.slice(0,i)
    // let str2 = str.slice(i+s1.length,str.length)
    // return i>-1 && str2 + str1 == s1
    return (s1+s1).indexOf(s2)>-1&&s1.length==s2.length

};
var res = isFlipedString(s1,s2)
console.log();