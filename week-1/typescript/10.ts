/**
 * Write a function that accepts 2 numbers as parameters and throws a custom 'Error' if the second number is 0
 * @param {number} num1 The first number to check.
 * @param {number} num2 The second number to check.
 * @throws {Error} If the second number is 0.
 */

function Nums(num1: number, num2: number): number {
    if (num1 >= 1 && num2 === 0) {
        throw new Error('The second number is 0');
    }
    return num1 && num2;
}

try {
    console.log('====================================');
    console.log(Nums(1, 0));
    console.log('====================================');
}catch (error) {
    console.log('====================================');
    console.log((error as Error).message);
    console.log('====================================');
}