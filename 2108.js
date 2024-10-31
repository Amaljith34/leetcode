function fn(words) {
   let count=0
    for(let i=0;i<words.length;i++){
        
        let element=words[i]
        let rev=element.split('').reverse().join('')
        // console.log(rev);
        
        if(element==rev){
            // console.log(rev);
            
            return element
        }
        else{
            count +=1
        }
        
        
        
        
    }
    if(count=words.length){
       return `""`
    }
    
    
};
console.log(fn(["abc","car","ada","racecar","cool"]));
