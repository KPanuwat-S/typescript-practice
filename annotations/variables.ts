// Type annotation
let apples: number = 5;

// apples = "test";
// cannot assign string to a number type variable

// 02 -- Built in object

let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns tha 'any' type

const json = '{"x":10, "y":20}';

// const coordinates = JSON.parse(json);
// type any which should be avoided

const coordinates: { x: number; y: number } = JSON.parse(json);

// More example for type inference

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
    console.log(foundWord);
  }
}
