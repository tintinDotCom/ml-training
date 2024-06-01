/**
 * Write a function that accepts a string and converts the first letter of each word to uppercase.
 * @param {string} str The string to convert.
 * @return {string} The string with the first letter converted to uppercase.
 *
 * Example string: "The quick brown fox jumps over the lazy dog"
 * Expected output: "The Quick Brown Fox Jumps Over The Lazy Dog"
 */
function firstLetterCaptil(str : string): string{
    return (str.replace(/\b\w/g, (match) => match.toUpperCase()));
}
console.log('====================================');
console.log(firstLetterCaptil('The quick brown fox'));
console.log('====================================');