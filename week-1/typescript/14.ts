/**
 * Write a function that accepts an array of numbers and displays the highest and lowest numbers in the array.
 * @param {number[]} arr The array of numbers.
 * @return {string} The highest and lowest numbers in the array.
 *
 * Example array: [5, 2, 8, 1, 9, 3]
 * Expected output: "The lowest number is 1 and the highest number is 9."
 */
function num(arr : number[]){
    if(arr.length === 0) {
        return("Array is empty")
    } 

    const highestNumber : number = Math.max(...arr);
    const lowestNumber : number = Math.min(...arr);

    return(`The lowest number is ${lowestNumber} and the highest number is ${highestNumber}`)
}

console.log('====================================');
console.log(num([1,4,65,78,90]));
console.log('====================================');