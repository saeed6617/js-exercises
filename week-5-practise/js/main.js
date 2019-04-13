//task one

var blueBtn = document.querySelector("#blueBtn");
blueBtn.addEventListener("click", changeColorBlue);

function changeColorBlue() {
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "#588fbd";

  var donateBike = document.querySelector(".btnlrg");
  donateBike.style.backgroundColor = `#ffa500`;

  var volunteer = document.querySelector(".blrgtn-");
  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
}

//task two

var orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", changeColorOrange);

function changeColorOrange() {
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "#f0ad4e";

  var donateBike = document.querySelector(".btnlrg");
  donateBike.style.backgroundColor = `#5751fd`;

  var volunteer = document.querySelector(".blrgtn-");
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "white";
}

//task three

var greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", changeColorGreen);

function changeColorGreen() {
  var jumbotron = document.querySelector(".jumbotron");
  jumbotron.style.backgroundColor = "#87ca8a";

  var donateBike = document.querySelector(".btnlrg");
  donateBike.style.backgroundColor = `black`;

  var volunteer = document.querySelector(".blrgtn-");
  volunteer.style.backgroundColor = "#8c9c08";
}
