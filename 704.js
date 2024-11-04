function fn(arr,target){
        
    console.log(nums);
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }

    }
    return '-1'
}
console.log(fn([-1,0,3,5,9,12],2));
