/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */


function FtoC(temperature){
    const answer = (temperature - 32) * 5/9

    console.log(answer);
}

FtoC(140);