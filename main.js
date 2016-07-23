var inquire = require('inquirer');
var checkWord = require('./word.js')['gameResult'];
var wordObj = new checkWord();

function inquireFunc () {
	inquire.prompt([
		{
			type: "input",
			name: "letter",
			message: "Please guess the word: " + wordObj.notGuessed.join(' ')
		}
	]).then(function(user) {
		if (wordObj.guessCount === 1) {
			return console.log('You failed to guess the word..')
		};
		if (user.letter.length > 1) {
			console.log('Only one letter at a time!');
			console.log('==================================================');
			inquireFunc();
		} else if (user.letter.length === 0) {
			console.log('Please choose a letter!');
			console.log('==================================================');
			inquireFunc();
		} else if (wordObj.guessedLetters.indexOf(user.letter) > -1) {
			console.log('That letter was already guessed. Please try again!');
			console.log('==================================================');
			inquireFunc();
		} else{
			wordObj.takeLetters(user.letter);
			console.log('Guessed letters: ' + wordObj.guessedLetters.join(' '));
			console.log('Guesses remaining: ' + wordObj.guessCount);
			if (wordObj.currentWord.join('') === wordObj.notGuessed.join('')){
				return console.log('Good job! You guessed correctly!!!');
			}
			else{
				inquireFunc();
			};	
		};
		
	});
};
inquireFunc();