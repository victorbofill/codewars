// PROBLEM: https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript


// SOLUTION
function abbrevName(name){
    let firstLetter = name[0];
    let spaceIndex = name.indexOf(" ");
    let secondLetter = name[spaceIndex + 1];
    let result = firstLetter + "." + secondLetter;
    result;
    return result.toUpperCase();
  }