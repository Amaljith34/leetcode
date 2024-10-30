function fn(num) {
    if(num<=0){
        return false
    }
    else{
        
       
        let sqrt=Math.sqrt(num+1)
        let result=Math.floor(sqrt)
        // console.log(result);
        if(result*result===num){
            return true
        }
        else{
            return false
        }

    }
   
     
};
console.log(fn(0));

