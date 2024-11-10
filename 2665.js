
 function fn(init) {
    let present = init;
    return {
        increment:()=> ++present,
        decrement:()=> --present,
        reset:()=> present = init,
    }
};
