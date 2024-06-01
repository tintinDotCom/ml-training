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

function MergeArrays(arr1 : number[], arr2 : number[]){
    return(Array.from(new Set([...arr1, ...arr2].sort())))
}



console.log(MergeArrays([1,2,3,44,5], [3, 4,5,5,6,5]));