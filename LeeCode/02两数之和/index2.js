var twoSum = function(nums, target) {
    var obj = {}
    for(var i = 0;i<nums.length;i++){
        if(nums[i] in obj){
            return [ i ,obj[nums[i]]]
        }else{
            obj[target - nums[i]] =  i
        }
    }

}
var nums = [5,3,1,22,2,7,11,15,33,44,55,66,77,88,99], target = 9

console.log(twoSum(nums,target));