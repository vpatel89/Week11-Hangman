var picksWord = require('./game.js')['selectedMovie'];
var userLetter = require('./letter.js')['guessingLetter'];
var letterObj = new userLetter(picksWord());
var wordObj = new Word();

function Word (wrd) {
	this.guessedLetters = [];
	this.guessCount = 10;
	this.currentWord = letterObj.word;
	this.notGuessed = letterObj.dashedWord;

	this.takeLetters = function(userInput) {
		if (this.currentWord.indexOf(userInput) >= 0) {
			console.log('The guessed letter is correct! Please continue.');
			console.log('==================================================');
			this.guessedLetters.push(userInput);
			for (var i = 0; i < this.currentWord.length; i++) {
				if (userInput === this.currentWord[i]) {
					this.notGuessed[i] = userInput;
				};
			};
		} else {
			console.log('That guess is incorrect. Please try again')
			console.log('==================================================');
			this.guessCount--;
			this.guessedLetters.push(userInput);
		};
	};
};

module.exports['gameResult'] = Word;