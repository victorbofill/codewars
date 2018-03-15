// WEEKLY CHALLENGE: https://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript
//
function cubeOdd(arr) {
  let total = 0;
  arr.forEach(function(num) {
    if ((num % 2) != 0) {total += (num*num*num)};
  })
  if (isNaN(total)){total = undefined};
  return total;
}

// CHALLENGE: https://www.codewars.com/kata/sum-of-positive/train/javascript

// SOLUTION
function positiveSum(arr) {
  let total = 0;
  arr.forEach(function(number) {
    if (number > 0) {
      total += number;
    };
  });
  return total;
};

// CHALLENGE: https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

//SOLUTION: 
function removeChar(str){
  str = str.split("");
  str.splice(0, 1);
  str.splice(((str.length) - 1), 1);
  str = str.join("");
  return str;
 };

// CHALLENGE: https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript

// SOLUTION: 
function sumArray(array) {
  if (!array) {return 0} else {
    let arr = array.sort(function compare(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0});
  
    const arrayLength = arr.length;
  
    if (arrayLength >= 4) {
     arr = arr.slice(1, (arrayLength - 1));
     arr = arr.reduce((acc, val) => acc + val);
    } else {arr = 0};
     return arr;
  }
}

// CHALLENGE: https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

// SOLUTION: 
function countSheeps(arrayOfSheep) {
  let numSheep = 0;
  arrayOfSheep.forEach(function(sheep) {
  if (sheep === true) {numSheep++};
  });
 return numSheep;
}