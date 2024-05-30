/**
 * Write a function that takes an array of numbers and throws a custom 'Error' if the array is empty.
 * @param {number[]} arr The array to check.
 * @throws {Error} If the array is empty.
 */

function Numbers(arr) {
    if(arr.length === 0) {
        throw new Error("Array is empty.")
    } return arr;
}

try{
    const numbers = Numbers([]);
    console.log(numbers)
}catch(error){
    console.log(error.message);
}