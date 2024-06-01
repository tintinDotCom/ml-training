/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */

function Num(num: number): number {
    if (!Number.isInteger(num)) {
        throw new Error(`${num} is not an integer.`);
    }
    return num;
}

try {
    console.log('====================================');
    console.log(Num(3));
    console.log('====================================');

} catch (error) {
    console.log('====================================');
    console.log((error as Error).message);
    console.log('====================================');
}