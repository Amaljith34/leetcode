var twosum=function(nums,target){
    let newArr=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                newArr.push(i,j)
            }
        }    
    }
    return newArr
    
}
console.log(twosum([10,5,8,6,12,3],15));
