/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is less than 0
 * @param {number} num The number to check.
 * @throws {Error} If the number is not a positive integer.
 */
function Num(num : number) : number {
    if(num < 0 ) {
        throw new Error('The number is not a positive integer.')
    }
    return num;
};


try {
    console.log('====================================');
    console.log(Num(-2));
    console.log('====================================');
} catch(error) {
    console.log('====================================');
    console.log((error as Error).message);
    console.log('====================================');
}