for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

function customFizzBuzz() {
    let divisor1 = parseInt(prompt("Enter the first divisor:"));
    let divisor2 = parseInt(prompt("Enter the second divisor:"));
    let message1 = prompt("Enter the message for the first divisor:");
    let message2 = prompt("Enter the message for the second divisor:");
    let maxNumber = parseInt(prompt("Enter the maximum number:"));

    for (let i = 1; i <= maxNumber; i++) {
        if (i % divisor1 === 0 && i % divisor2 === 0) {
            console.log(message1 + message2);
        } else if (i % divisor1 === 0) {
            console.log(message1);
        } else if (i % divisor2 === 0) {
            console.log(message2);
        } else {
            console.log(i);
        }
    }
}

customFizzBuzz();
