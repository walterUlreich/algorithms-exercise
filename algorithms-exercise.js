// Problem 1
// takes array of numbers and returns the mode
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


// Problem 2
// given year as number, returns whether number is leap year
var isLeapYear = function(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  } else {
    return false
  }
}


// Problem 3
// takes array of integers > 0, returns first integer that does not appear
var testArray = [1,2,5]

var firstMissingInt = function(numbers) {
  for (var i = 1; true; i++) {
    if (numbers.indexOf(i) === -1) {
      return i
    }
  }
}


// Problem 4
// takes array of integers, returns array with duplicates removed
function removeDuplicates(num) {
  var x,
      len = num.length,
      out = [],
      obj = {};

  for (x=0; x<len; x++) {
    obj[num[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}


// Problem 5
// translate string to pig latin
function pigLatin(string) {
  var vowels=['a','e','i','o','u']
  var result = string.split('')

  if(vowels.includes(string.charAt(0))) {
    return string += 'way'
  } else {
    for (var i = 0; i < string.length; i++) {
      if(!vowels.includes(string[i])) {
        result.push(result.shift())
      } else {
        result.push('ay')
        return result.join('')
      }
    }
  }
}


// Problem 6
// takes in two arrays, determine if they contain same # of same values
var sameArray = function(array1, array2) {
  var result
    for (var i=0; i < array1.length; i++) {
        for (var j=0; j < array2.length; j++) {
            if ((array1[i] === array2[j]) && (array1.length === array2.length)) {
                result = true
            } else {
                result = false
            }
        }
    }
    return result
}


// Problem 7
// takes in array of numbers and max cutoff value, returns array with elements limited by cutoff
var maxCutoff = function(array, number) {
    for (var i=0; i<array.length; i++) {
        if(array[i]>number)
          array[i] = number;
    }
    return array
}


// Problem 8
// takes no input, returns array of 10 random integers between 1 and 100
function randomNums() {
    var array = [];
    for (var i=0;i<10;i++){
        var next_num =  Math.floor(Math.random() * (100) + 1);
        while (array.indexOf(next_num) !== -1) {
            next_num =  Math.floor(Math.random() * (100) + 1);
        }
        array.push(next_num);
    }
    return array;
}


// Problem 9
// takes two sorted lists, merges them into new sorted list
var mergeSortedArrays = function(array1, array2) {
    array1.sort();
    array2.sort();
    var joinedArray = array1.concat(array2);
    joinedArray.sort();
    return joinedArray;
}
