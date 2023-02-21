// Array
// Nama Kelmpok : Berlin
// Mobile Application Development
console.log("*Array*");
let people = ["Greg", "Mary", "Devon", "James"];

// 1
console.log("1.");
for (let i = 0; i < people.length; i++) {
  console.log(i);
}

// 2
console.log("\n\n\n2.");
people.forEach((i) => console.log(i));

// 3
console.log("\n\n\n3.");
people.shift();
console.log(people);

// 4
console.log("\n\n\n4.");
people.pop();
console.log(people);

// 5
console.log("\n\n\n5.");
people.unshift("Matt");
console.log(people);

// 6
console.log("\n\n\n6.");
people.push("Berlin");
console.log(people);

// 7
console.log("\n\n\n7.");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// 8
console.log("\n\n\n8.");
let array_copy = people.slice(2);
console.log(array_copy);

// 9
console.log("\n\n\n9.");
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// 10
console.log("\n\n\n10.");
const withBob = people.concat("Bob");
console.log(withBob);

// Object
console.log("\n\n*Object*");
let programming = {
  languages: ["Javascript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/question/234075/what-is-your-best-programmer-joke",
};

//1.
console.log("\n1.");
programming.languages[3] = "Go";
console.log(programming.languages);

//2.
console.log("\n2.");
programming["difficulty"] = 7;
console.log(programming.difficulty);

//3.
console.log("\n3.");
delete programming.jokes;
console.log(programming);

//4.
console.log("\n4.");
programming.isFun = true;
console.log(programming);

//5.
console.log("\n5.");
programming.languages.map((value, index) => {
  console.log(index + " - " + value);
});
