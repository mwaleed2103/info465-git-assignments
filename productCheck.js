// productCheck.js
// This program accepts integers from the user until they enter 'q' or 'Q'.
// It echoes the numbers entered and checks whether the product of
// any two numbers equals a third number.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

// Function to check if any two numbers multiply to a third
function checkProductCondition(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (k !== i && k !== j) {
          if (arr[i] * arr[j] === arr[k]) {
            return `Condition is met: ${arr[i]} x ${arr[j]} = ${arr[k]}`;
          }
        }
      }
    }
  }
  return "Condition was not met";
}

// Prompt user for input
function askForNumber() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {

    // Quit condition (case-insensitive)
    if (input.toLowerCase() === "q") {

      console.log("\nNumbers entered:", numbers);

      if (numbers.length < 3) {
        console.log("Not enough numbers to evaluate the condition.");
      } else {
        console.log(checkProductCondition(numbers));
      }

      rl.close();
      return;
    }

    let num = parseInt(input);

    // Error handling
    if (isNaN(num)) {
      console.log("Error: Please enter a valid integer or 'q' to quit.");
    } else {
      numbers.push(num);
    }

    askForNumber();
  });
}

// Start program
askForNumber();
