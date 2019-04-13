/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
function changingColor() {
  var body = document.querySelector("body");
  body.style.backgroundColor = "yellow";
}

var changeColor = document.querySelector("#bgrChangeBtn");
changeColor.addEventListener("click", changingColor);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var makeAlert = document.querySelector("#alertBtn");
function alert1() {
  alert("Thanks for visiting bike refugees");
}
makeAlert.addEventListener("click", alert1);
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
function makeParagraph() {
  var paragraph = document.createElement("p");
  var findParagraph = document.querySelector("#mainArticles");
  findParagraph.appendChild(paragraph);
  paragraph.innerText = "Hello,I am the coolest web developer.";
}
var addText = document.querySelector("#addTextBtn");
addText.addEventListener("click", makeParagraph);

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largerLinksButton = document.querySelector("#largerLinksBtn");
largerLinksButton.addEventListener("click", changeText);

function changeText() {
  var findLinks = document.querySelectorAll("a");
  findLinks.forEach(function(array) {
    array.style.fontSize = "19px";
  });
}
