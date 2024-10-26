function fn(nums) {
    let sum=0
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]%3===0 && nums[i]%2===0){
            count+=1
            sum+=nums[i]
        }

    }
    if(count===0){
        return 0
    }
    else{
        return  Math.floor(sum/count)

    }

};
console.log(fn([,5,8,7,9,6]));
