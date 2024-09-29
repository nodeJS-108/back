console.log("hello world!");

setTimeout(() => {
  console.log("timeout");
}, 0);
setImmediate(() => {
  console.log("immediate");
});

const fs = require("node:fs");
fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});

//----------------------------------------------------------------

function fizzBuzz() {
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
}

fizzBuzz();
