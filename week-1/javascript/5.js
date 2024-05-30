/**
 * Write a function that converts temperature in Celsius to Fahrenheit.
 * Expected output: 60°C = 140°F.
 * @param {number} celsius The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */


function CtoF(temperature) {
    const answer = temperature * 9 / 5 + 32;

    console.log(answer)
};

CtoF(60)