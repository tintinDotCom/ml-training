/**
 * Write a function that merges two arrays into a single array and removes duplicates.
 *
 * Example:
 * - merge([1, 2, 3], [2, 3, 4]) should return [1, 2, 3, 4]
 * - merge([1, 2, 3], [3, 4, 5]) should return [1, 2, 3, 4, 5]
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */


function mergeArray(arr1, arr2){
    return(Array.from(new Set([...arr1, ...arr2])))
}


let arr1 = [1, 3, 4, 6];
let arr2 = [1, 2, 6, 5];

console.log(mergeArray(arr1, arr2))