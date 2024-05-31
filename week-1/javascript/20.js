/**
 * Write a function that accepts a string as input and swaps the case of each character in the string.
 *
 * Example:
 * - swapCase("Hello World") should return "hELLO wORLD"
 *
 * @param {string} str
 * @returns {string}
 */


function swapCase(str){
    let newTxt = '';

    for (let index = 0; index < str.length; index++) {
        newTxt += str[index] === str[index].toUpperCase() ? str[index].toLowerCase() : str[index].toUpperCase()
    }


    return newTxt;
}

console.log(swapCase("the QUICK brown FOx"));