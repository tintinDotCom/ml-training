/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */

function getVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let string = '';
    
    for (let char of str.toLowerCase()){
        if(vowels.includes(char)){
            string += char;
        }
    } 
    return string;
    
}

const stringInput = 'Christine Mae';
const vowels = getVowels(stringInput);
console.log(vowels);