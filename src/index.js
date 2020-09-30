
exports.min = function min (array) {
  if (!array) {
    return 0;
 }

  if (array.length == 0) {
    return 0;
  }

  let max = 9999;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < max) {
      max = array[i];
    } 
  }
  return max;
};
  


exports.max = function max (array) {
  if (!array) {
    return 0;
 }
  
  if (array.length == 0) {
    return 0;
  }

  let min = -9999;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > min) {
      min = array[i]
    }
  }
  return min;
};

exports.avg = function avg (array) {
  if (!array) {
    return 0;
 }
  
  if (array.length == 0) {
    return 0;
  }
  
  const total = array.reduce((a, b) => a + b, 0);
  return total / array.length;
  
};
