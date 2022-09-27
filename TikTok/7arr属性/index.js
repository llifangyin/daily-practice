var arr = []
arr[0]  = 1 
arr['0'] = 2
//数据的本质是对象 数字属性会最终转为字符串 arr[0] === arr['0']
console.log(arr[0] + arr['0']);
