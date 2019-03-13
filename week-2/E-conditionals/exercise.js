/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
if (danielsRole) {
  console.log("Hi,I am " + name + " and I am a " + danielsRole + ".");
} else {
  console.log("Hi,I am " + name + " and I am a student.");
}

// Write your code here

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
module.exports = {
  danielsRole
};

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
