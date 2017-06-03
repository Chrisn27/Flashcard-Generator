var BasicCard = function(front, back) {

    this.front = front.toLowerCase();
    this.back = back.toLowerCase();

};

/*
exports.basicQuestions = [
	{
		front: 'Which two pop princesses have a long running feud?',
		back: 'Katy Perry and Taylor Swift'
	},
	{
		front: 'Which one is taller?',
		back: 'Taylor Swift'
	},
	{
		front: 'What house is best in Game of Thrones?',
		back: 'House Stark'
	}
]
*/

module.exports = BasicCard