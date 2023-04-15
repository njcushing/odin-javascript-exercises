const sumAll = function(one, two) {
  if(one < 0 || two < 0){ return 'ERROR'; }
  if(typeof one != "number" || typeof two != "number"){ return 'ERROR'; }
  let first = Math.min(one, two);
  let last = Math.max(one, two);
  let sum = 0;
  for(let i = first; i <= last; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
