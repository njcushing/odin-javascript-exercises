const fibonacci = function(index) {
    if(index < 0){ return 'OOPS'; }
    if(index == 0){ return 1; }
    let prev = 0;
    let curr = 1;
    for(let i = 1; i < index; i++){
        let temp = prev + curr;
        prev = curr;
        curr = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
