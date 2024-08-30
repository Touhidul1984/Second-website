//1. Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";

//2. Ans: On one single line, declare three variables with the following names and values:

firstName = "John"
lastName = "Doe"
age = 35

// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 3rd Variable Name And Values Both!

let firstName = "John"; // 1st Variable Name
let lastName = "Doe";   // 2nd Variable Values
let age = 35;      // 3rd Variable Name and Values Both

//3. Ans: Use the correct assignment operator that will result in x being 50 (same as x = x * y).

x = 10;
y = 5;
x *= y   // X is now 50

// 4. Ans: Use comments to describe the correct data type of the following variables:

let length = 16; // data type: Number
let lastName = "Johnson"; // data type: String .

const x = {
  firstName: "John",
  lastName: "Doe"
};    // data type: Object

//5 Ans: Execute the function named myFunction.

 function myFunction() {
  alert("Hello World!");
}
// Calling the function
myFunction();

//6 Ana:1. Create an object called person with name = John, age = 50, Then,
   access the object to alert("John is 50").

   // Creating the object
const person = {
    name: "John",
    age: 50
  };
// Accessing the object properties to display the alert
  alert(person.name + " is " + person.age);


  //7. Ans: 1. The <button> element should do something when someone clicks on it. Try to fix it!

<button onclick="handleClick()">Click me.</button>

<script>
  function handleClick() {
    alert("Button clicked!");
  }
</script>

//8. Ans: 1. Alert the number of items in an array, using the correct Array property:

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); // This will alert the number of items in the array, which is 3

//2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford"; // Changing the first item to "Ford"
console.log(Brand); // Output: ["Ford", "Jeep", "Mercedes"]

//9.Ans:
1. Use the correct Math method to create a random number.
let randomNumber = Math.random(); // Generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(randomNumber);

2. Use the correct Math method to return the largest number of 10 and 20.
let largestNumber = Math.max(10, 20); // Returns the largest number, which is 20
console.log(largestNumber);

3. Use the correct Math method to get the square root of 9.
let squareRoot = Math.sqrt(9); // Returns the square root of 9, which is 3
console.log(squareRoot);

//10 Ans:1. Choose the correct comparison operator to alert true, when x is greater than y.
let x = 10;
let y = 5;

if (x > y) {
  alert(true); // Alerts true because x is greater than y
}

2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 16; // Example age value, you can change it to test different scenarios

alert(age < 18 ? "Too young" : "Old enough"); // Uses the ternary operator to decide the message
