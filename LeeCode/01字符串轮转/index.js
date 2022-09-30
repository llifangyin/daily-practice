var isFlipedString = function(s1, s2) {
    var midObjArr = []
    if(s1.length!==s2.length){return false}
    // console.log(s1.length);
    // 中心点的字符串 可能的位数 1 > s1.length-1
    for(var midLen = 1 ;midLen<s1.length-1;midLen++){
        
        for(var i = 0;i<=s1.length-midLen;i++){
            // 第一个从0开始到 i位
            // 中心串 从i开始 截取midlen+i位
            // 最后一个 从midlen + i开始截到最后一位 s1.length
            let str1 = s1.slice(0,i)
            let midStr =  s1.slice(i,midLen+i)
            let str3 = s1.slice(midLen + i,s1.length)
            // console.log(i,midLen);
            // console.log(str1,'--',midStr,'--',str3);
            let finalStr = str3 + midStr + str1
            midObjArr.push( finalStr )
        }
    } 
    // console.log(midObjArr);
    
    return midObjArr.includes(s2)


};

var s1 = "waterbottle", s2 = "erbottlewat"


console.log(isFlipedString(s1,s2));