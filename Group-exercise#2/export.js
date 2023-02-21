// Latihan 1 Export file
export let numbers = [1, 2, 3, 4, 5];

// Latihan 2 Export as
let warna = "Red";
let orang = "John";

// Latihan 3 Export default
let sayHello = (name, age, address) => {
  return `Hello my name is ${name}, I'm ${age} years old. I live in ${address}`;
};

export { warna as color, orang as person };
export default sayHello;