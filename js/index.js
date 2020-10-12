// Iteration 1: Names and Input

let hacker1 = 'Jessy'
console.log(hacker1)
let hacker2 = 'Ivan'
console.log(hacker2);


// Iteration 2: Conditionals

function longestName(hacker1, hacker2) {
  let h1l = hacker1.length
  let h2l = hacker2.length
  let name = String
  let longest = 0
  if (h1l > h2l) {
    longest = h1l
    name = hacker1
    console.log(`The driver has the longest name, it has ${longest} characters`);
  } else if (h1l < h2l) {
    h2l = longest
  }
  console.log(`It seems that the navigator has the longest name, it has ${longest} characters.`);
};
longestName(hacker1, hacker2);

// Iteration 3: Loops
