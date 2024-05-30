/**
 * Write a function that prints the numbers from 1 to a given number.
 * But for multiples of three print 'Fizz' instead of the number and for the
 * multiples of five print 'Buzz'.
 * For numbers which are multiples of both three and five print 'FizzBuzz'.
 * @param {number} n The number to print.
 */


function multiplesBy(number) {
    for(let x = 0; x <= number ; x++){

        if(x %3 === 0 && x %5 === 0){
            console.log("FizzBuzz")
        }
        else if(x %3 === 0){
            console.log("Fizz")
        }
        else if(x %5 === 0){
            console.log("Buzz")
        }
        else {
            console.log(x)
        }
        
    }
}

multiplesBy(30);