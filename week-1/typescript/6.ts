/**
 * Write a function that converts Fahrenheit to Celsius.
 * Expected output: 140°F = 60°C.
 * @param {number} fahrenheit The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */

function FarenheitToCelsius(fahrenheit : number) : void {
    const answer : number = (fahrenheit - 32) * 5/9;

    console.log('====================================');
    console.log(answer);
    console.log('====================================');
};

FarenheitToCelsius(140)