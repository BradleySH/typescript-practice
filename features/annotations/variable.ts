//  will only asign type number
let apples: number = 5;
let speed: String = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//  built in Objects
let now: Date = new Date();

//Array
let colors: String[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function for variables
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1. Function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
// JSON.parse() will return an 'any' type varies on what type
//of string we put in
// avoid any at all costs
//const coordinates: {x: number; y: number} = JSON.parse(json); fixes the type any

// 2.  When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
