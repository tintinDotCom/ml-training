/**
 * Write a function that returns all vowels in a string.
 * @param {string} str The string to check.
 * @return {string} The string with all vowels.
 */

function GetVowels (str: string) {
    const vowels : string[] = ['a', 'e', 'i', 'o', 'u'];
    let vowelString : string = '';

    for (let char of str.toLowerCase()) {
        if(vowels.includes(char)){
            vowelString += char;
        }
    }
    return vowelString;
}

const inputString : string = 'Christine';
const Vowels : string = GetVowels(inputString);
console.log('====================================');
console.log(Vowels);
console.log('====================================');