// PROBLEM
// You are going to be given an array of integers. Your job is to take that array and find an index N where the
// sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no
// index that would make this happen, return -1.
const job = [1,2,3,4,3,2,1];

function findEvenIndex(arr) {
    let left = 0;
    let right = 0;
    let checker = false;
    
    for (let i = 0; i < arr.length; i++) {
        left = 0;
        right = 0;

        for (let x = i; x > 0; x--) {
            left += arr[x-1];
        }

        for (let y = (arr.length - (i+1)); y > 0; y--) {
            right += arr[(i+y)];
        }

        if (left === right) {
            console.log(i);
            checker = true;
            return i;
        }
    }

    if (checker === false) {
        return -1;
    }

}
findEvenIndex(job);
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript