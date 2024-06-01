/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */
function Num(arr : number[]): number[] {
    if(arr.length === 0) {
        throw new Error("Array is empty.")
    } return arr;
}

try{
    console.log('====================================');
    console.log(Num([]));
    console.log('====================================');
} catch (error) {
    console.log('====================================');
    console.log((error as Error).message);
    console.log('====================================');
}