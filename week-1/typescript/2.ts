/**
 * Write a function to calculate the sum of all numbers in an array.
 * @param {number[]} arr The array of numbers.
 * @return {number} The sum of all numbers in the array.
 */

function Sum(arr: number[]){
    let total : number = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    };

    return total
}

console.log('====================================');
console.log(Sum([1,2,3,4,5]));
console.log('====================================');