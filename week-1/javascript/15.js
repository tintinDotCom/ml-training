/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */


function evenOrOdd(n){
    for(let x = 0; x <= n; x++){
        if(x %2 === 0){
            console.log(`${x} is even`)
        } else  console.log(`${x} is odd`)
    }
}

evenOrOdd(21)