var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstCard = new BasicCard("Who won game 1 of the 2017 Stanley Cup Finals?", "Pittsburgh Penguins")

var readBasic = function() {
    console.log("Front: " + firstCard.front + "\nBack: " + firstCard.back);
}


readBasic();

