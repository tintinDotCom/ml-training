/**
 * Write a function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
 * @param {number} num The number to check.
 * @throws {Error} If the number is not an integer.
 */


function number(n){

    if (!Number.isInteger(n)){
        throw new Error("Not a number")
    } else {
        return n
    }
}

try {
    const checkNumber = number("Christine");
    console.log(checkNumber + " is a number.");
} catch (error) {
    console.log ( error.message)
}