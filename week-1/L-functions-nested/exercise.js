/*function getAgeInDays(age) {
    return age * 365;
  }
  
  function createGreeting(name, age) {
    var ageInDays = getAgeInDays(age);
    var message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
    
  }
  var nameAndAge =createGreeting("Saeed",31);
  console.log(nameAndAge);  */

function percentageOfPpl(a, b) {
  return Math.round((a / (a + b)) * 100);
}
function text(a, b, c) {
  var perOfPpl = percentageOfPpl(a, b);
  var message = "Percentage " + c + ":" + perOfPpl + "%";
  return message;
}
var finalText1 = text(15, 8, "students");
var finalText2 = text(8, 15, "mentors");
console.log(finalText1);
console.log(finalText2);
