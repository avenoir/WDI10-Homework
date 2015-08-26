// Exercises: Objects
// The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
	title : "Spagbol",
	servings: 4,
	ingredients: ["minced meat", "tinned tomato", "celery", "carrot", "onion", "white wine"]
};

console.log(recipe.title);
console.log("Serves: " + recipe.servings);
console.log("Ingredients: ")
for (var i = 0; i < recipe.ingredients.length; i++){
	var ingredient = recipe.ingredients[i];
	console.log(ingredient);
}

// The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var readingList = [
	{ title : "The Iliad", author : "Homer", alreadyRead : true }, 
	{ title : "The Odyssey", author : "Homer", alreadyRead: false },
	{ title : "Harry Potter and the Philosopher's Stone", author : "JK Rowling", alreadyRead: true }
];


for ( var i = 0; i < readingList.length; i++ ) {
	var book = readingList[i];
	if (book.alreadyRead) { // if is equal to true
		console.log("You already read " + book.title.concat(" by ", book.author))
	} else { 
		console.log("You still need to read " + book.title.concat(" by ", book.author));
	}		
};

// The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var SpanishApartment = {
	title : "L'Auberge Espagnole (The Spanish Apartment)",
	duration : 122,
	stars : [" Roman Duris", "Judith Godreche", "Audrey Tautou"]
};

var movieInfo = function(favouriteMovie){ //use movie.stars.join(', ') instead
	var starsList = ""; 
	for (var i = 0; i < favouriteMovie.stars.length; i++) {
		if (i === 0){
		starsList = starsList + favouriteMovie.stars[i];
		} else {
				starsList = starsList + ", " + favouriteMovie.stars[i];
	};
};
	return console.log(favouriteMovie.title + " lasts for " + favouriteMovie.duration + " minutes. Stars:" + starsList + ".");
};

movieInfo(SpanishApartment);


var movieFormatter = function(m) {

	var info = [
		m.title,
		'lasts for',
		m.duration,
		'minutes.',
		'Stars:',
		m.stars.join(', ')
		].join(' ');
	console.log(info);
};

movieFormatter(SpanishApartment);





