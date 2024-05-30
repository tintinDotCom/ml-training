/**
 * Write a function that accepts a string and converts the first letter of each word to uppercase.
 * @param {string} str The string to convert.
 * @return {string} The string with the first letter converted to uppercase.
 *
 * Example string: "The quick brown fox jumps over the lazy dog"
 * Expected output: "The Quick Brown Fox Jumps Over The Lazy Dog"
 */


function firstLetterCapitalization(str){
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

let input = "the quick brown fox jumps over the lazy dog.";
const output = firstLetterCapitalization(input);
console.log(output);