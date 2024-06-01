/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */


function CelsiusToFahrenheit(celsius : number) : void {
    const answer : number = celsius * 9/5 + 32;

    console.log('====================================');
    console.log(answer);
    console.log('====================================');
}


CelsiusToFahrenheit(60)