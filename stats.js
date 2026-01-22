// stats.js
// This program reads integers from the user, stores them in an array,
// calculates the mean (average) and median, and displays the results.
// The user can enter 'q' to stop entering numbers.

const readline = require("readline");

// Create an interface to read user input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array to store user-entered numbers
let numbers = [];

// Function to calculate the mean (average)
function calculateMean(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// Function to calculate the median
function calculateMedian(arr) {
  // Create a sorted copy of the array
  let sorted = [...arr].sort((a, b) => a - b);
  let middle = Math.floor(sorted.length / 2);

  // If even number of elements, average the two middle values
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } 
  // If odd, return the middle value
  else {
    return sorted[middle];
  }
}

// Function to repeatedly ask the user for input
function askForNumber() {
  rl.question("Enter an integer (or 'q' to quit): ", function (input) {

    // Check if user wants to quit
    if (input.toLowerCase() === "q") {

      if (numbers.length === 0) {
        console.log("No numbers were entered.");
      } else {
        let mean = calculateMean(numbers);
        let median = calculateMedian(numbers);

        console.log("\nResults:");
        console.log("Numbers entered:", numbers);
        console.log("Mean:", mean);
        console.log("Median:", median);
      }

      rl.close();
      return;
    }

    // Convert input to integer
    let num = parseInt(input);

    // Error handling for invalid input
    if (isNaN(num)) {
      console.log("Error: Please enter a valid integer.");
    } else {
      numbers.push(num);
    }

    // Ask again
    askForNumber();
  });
}

// Start the program
askForNumber();
