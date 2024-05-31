/**
 * Write a function to check if a number is even or odd.
 * @param {number} num The number to check.
 * @return {boolean} True if the number is even, false if it is odd.
 */

function EvenOdd(num: number): boolean {
    const checkNumber: boolean = (num % 2 === 0) ? true : false;
    return checkNumber;
}

const output: boolean = EvenOdd(3);
console.log('====================================');
console.log(output);
console.log('====================================');