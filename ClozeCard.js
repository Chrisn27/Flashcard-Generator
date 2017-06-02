var ClozeCard= function(text, cloze) {

    if (text.indexOf(cloze) !== -1) {
      this.fullText = text;
      this.cloze = cloze;
      this.partial = text.replace(cloze, "...");
    } else {
      console.log("Sorry nerd, <" + cloze + "> does not exist in the text");
    };

};

module.exports = ClozeCard;