function multiplicationTable(num) {
    console.log(`Multiplication Table for ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}


function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
    return fahrenheit;
}


function checkPositiveOrNegative(num) {
    if (num > 0) {
        console.log(`${num} is a positive number.`);
    } else if (num < 0) {
        console.log(`${num} is a negative number.`);
    } else {
        console.log("The number is zero.");
    }
}



let number = prompt("Enter a number for multiplication table:");
multiplicationTable(parseInt(number));

let celsius = prompt("Enter temperature in Celsius:");
celsiusToFahrenheit(parseFloat(celsius));

let inputNumber = prompt("Enter a number to check if it's positive or negative:");
checkPositiveOrNegative(parseFloat(inputNumber));
