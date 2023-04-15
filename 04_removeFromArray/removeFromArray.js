const removeFromArray = function(arr, ...args) {
  if(!Array.isArray(arr)){ return 'ERROR'; }
  let res = [];
  outer: for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < args.length; j++){
      if(arr[i] === args[j]){ continue outer; }
    }
    res.push(arr[i]);
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
