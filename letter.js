var Letter = function(theWord) {
	//make a charac property and set it to what you think makes second_instructor_demonstration
	//make an appear property and set it to what makes sense
	//make a letterRender property and set it to a function that does what you think makes sense
	this.word = theWord.split('');
	this.dashes = function() {
		var notGuessed = [];
		for(i = 0; i < this.word.length; i++) {
			notGuessed.push('_');
		};
		return notGuessed
	};
	this.dashedWord = this.dashes();

};

//export the Letter constructor here
module.exports['guessingLetter'] = Letter;