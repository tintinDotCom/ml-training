/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */

function OddOrEven(n: number): void {
    for (let x: number = 1; x <= n; x++) {
        if (x % 2 === 0) {
            console.log(`${x} is Even`);
        } else {
            console.log(`${x} is Odd`);
        }
    }
}

console.log('====================================');
OddOrEven(10);
console.log('====================================');