// 数组求和，不允许使用循环、不允许使用标准库的函数
let nums = [3,4,5,5,6]

// 递归规律
// f(i)从第i为到末尾之和
// f(i) = f(i+1) + nums[i]

function  f(i){
    return i >= nums.length ? 0: nums[i] + f(i+1)
}
console.log(f(0));

