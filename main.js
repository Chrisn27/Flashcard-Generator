var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require('inquirer');

/*
var basicCardTest = new BasicCard("Who wrong the hit single, 'Shake it off'", "Taylor Swift");
console.log("---Basic Card Test---");
console.log("Front: " + basicCardTest.front + "\nBack: " + basicCardTest.back);
console.log("-------------------------------------------------------------------");

var clozeCardTest = new ClozeCard("It's like I got this music in my mind", "It's like I got this");

console.log("---ClozeCard Tests---");
console.log("Full Text: " + clozeCardTest.fullText + " Cloze: " + clozeCardTest.cloze);
console.log("Partial: " + clozeCardTest.partial);
console.log("-------------------------------------------------------------------");

console.log("---ClozeCard Error Checking---")
var clozeCardError = new ClozeCard("Saying it's gonna be alright", "Cause the players gonna play, play, play, play, play");
*/

var cardArr = [];
var questionNum = 0;
var correct = 0;

var chooseType = function() {

    inquirer.prompt([
        {
            type: "list",
            message: "What type of cards do you want to make?",
            choices: ["Basic", "Cloze"],
            name: "cardtype"
        }
    ]).then(function(user) {

        if (user.cardtype === "Basic") {
            makeBasic();
        } else {
            makeCloze();
        }
    });
};
            
var makeBasic = function () {

    if (cardArr.length < 3) {
        inquirer.prompt([
            {
                name: "front",
                message: "Hint: "
            }, 
            {
                name: "back",
                message: "Answer: "
            }
        ]).then(function(answers) {

            var bCard = new BasicCard (answers.front, answers.back)
            cardArr.push(bCard);
            makeBasic();

        })

            } else {
                basicFlashGame();
                //console.log(JSON.stringify(cardArr, null, 2));
            }
};
        
var makeCloze = function() {

    if (cardArr.length < 3) {
        inquirer.prompt([
            {
                name: "text",
                message: "Full Text: "
            }, 
            {
                name: "cloze",
                message: "Cloze: "
            }
        ]).then(function(answers) {

            var cCard = new ClozeCard (answers.text, answers.cloze)
            cardArr.push(cCard);
            makeCloze();

        })

      } else {
        closeFlashGame();
      }
};

var basicFlashGame = function() {

    if (questionNum < cardArr.length) {
        inquirer.prompt([
            {
			    type: 'input',
			    message: "Hint: " + cardArr[questionNum].front + " : ",
			    name: 'userGuess'
            }
        ]).then(function(answers) {
            
            if (answers.userGuess == cardArr[questionNum].back) {
                correct += 1;
                questionNum += 1;
                basicFlashGame();
            } else {
                questionNum += 1;
                basicFlashGame();
            }

        })

     } else {
        console.log("You got : " + correct + " correct");
     }
};

var closeFlashGame = function() {

    if (questionNum < cardArr.length) {
        inquirer.prompt([
            {
			    type: 'input',
			    message: "Hint: " + cardArr[questionNum].partial + " : ",
			    name: 'userGuess'
            }
        ]).then(function(answers) {
            
            if (answers.userGuess == cardArr[questionNum].cloze) {
                correct += 1;
                questionNum += 1;
                closeFlashGame();
            } else {
                questionNum += 1;
                closeFlashGame();
            }

        })

     } else {
        console.log("You got : " + correct + " correct");
     }
};

chooseType();