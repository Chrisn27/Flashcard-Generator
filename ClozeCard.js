var ClozeCard= function(text, cloze) {

  this.text = text;

  if (text.indexOf(cloze) !== -1) {
    this.cloze = cloze;
  } else {
    this.cloze = "Error";
  };

  this.fullText = text;

};

/*

TO DO

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

//Cloze validation error ?

*/

var newCloze = new ClozeCard("This is a test", "will it log an error?");

console.log(newCloze.cloze);

module.exports = ClozeCard;