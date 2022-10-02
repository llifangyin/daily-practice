var twoSum = function(arr,target){
    let index = nums.indexOf(target/2)
    if(index>-1){
        let flag = 0
        let _arr =[]
        nums.forEach((item,index)=>{
            if(item==target/2){
                _arr.push(index)
                flag ++
            }
        })
        console.log(flag)
        if(flag==2){
            return _arr
        }
    }

    for(let i = 0;i<nums.length-1;i++){
        if(
            nums.indexOf(target - nums[i])>-1 &&target - nums[i]!==nums[i]
        ){
            console.log(i,target- nums[i])
            return  [i,nums.indexOf(target - nums[i])] 
        }
    }

}

var nums = [5,3,1,22,2,7,11,15,33,44,55,66,77,88,99], target = 9

console.log(twoSum(nums,target));