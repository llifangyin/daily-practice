var twoSum = function(arr,target){
    var index1 ,index2;
    nums.forEach((num,i)=>{
        nums.forEach((num2,j)=>{
            if(num+num2==target&&i!=j){
                index1 =i;
                index2 = j
            }
        })
    })
    return [index1,index2]
}

var nums = [5,3,1,22,2,7,11,15,33,44,55,66,77,88,99], target = 9

console.log(twoSum(nums,target));