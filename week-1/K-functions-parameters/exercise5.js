// Declare your function here
function createLongGreeting(a, b) {
  return "Hello,my name is " + a + " and I am " + b + " years old.";
}
const greeting = createLongGreeting("Saeed", 31);

console.log(greeting);

// ignore below

module.exports = { createLongGreeting };
