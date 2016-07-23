function pickWord() {
	var movieTitle = ['ghostbusters', 'inception', 'titanic', 'goodfellas', 'godzilla', 'gremlins', 'alien'];
	var randomMovie = Math.floor(Math.random() * movieTitle.length);
	return movieTitle[randomMovie];
};

exports['selectedMovie'] = pickWord;