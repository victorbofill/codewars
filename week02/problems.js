// PROBLEM https://www.codewars.com/kata/even-or-odd/train/javascript 

// SOLUTION
function even_or_odd(number) {
    if (number % 2) {return "Odd"} else {return "Even"}
  }

// PROBLEM https://www.codewars.com/kata/opposite-number/train/javascript
// SOLUTION
function opposite(number) {
    return number * -1;
  }

// PROBLEM https://www.codewars.com/kata/string-repeat/train/javascript
// SOLUTION
function repeatStr (n, s) {
    let counter = n;
    let string = s;
    while (counter > 1) {
      string = string.concat(s);
      counter--;
    }
    return string;
  }

// PROBLEM https://www.codewars.com/kata/return-negative/train/javascript
// SOLUTION
function makeNegative(num) {
    if (num > 0) {
      num = num * -1;
    }
    return num;
  }