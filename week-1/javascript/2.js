/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */


function sum(arr) {
    let total = 0;

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    };

    return total;
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = sum(numbers);
console.log(totalSum)
