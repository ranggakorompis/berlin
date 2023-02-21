// File untuk import module yang telah di export
import { numbers, color, person } from "./export.js";
import sayHello from "./export.js";

// Latihan 1
console.log(numbers);

// Latihan 2
console.log(`Hello i'm ${person}. My favorite color is ${color}`);

// Latihan 3
console.log(sayHello("John", 27, "Manado"));
