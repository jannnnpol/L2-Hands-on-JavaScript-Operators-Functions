// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Ask for user input
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Calculate the sum
let sum = addNumbers(num1, num2);

// Display the result
alert("The sum is: " + sum);
console.log("The sum is:", sum);
