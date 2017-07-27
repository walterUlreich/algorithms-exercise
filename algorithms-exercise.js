/* Problem 1 */
var findMode = function(array) {
var mode = 0;
var count = 0;
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < i; j++){
       if(array[j] === array[i]){
           mode = array[i];
           count++;

       }
    }
  }
  return mode;
}

 findMode([3,9,9,8]);

 /* Problem 2 */
var isLeapYear = function(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  } else {
    return false
  }
}

isLeapYear(2016)

/* Problem 3 */

/* Problem 4 */
