//The Recipie Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipieChickenCurry = {
	title: "Chicken Curry",
	servings: 3,
	ingredients: ["Chicken", "Onions", "Tomatoes", "Garam Masala", "Garlic", "Ginger", "Salt", "Sugar", "Green chillies"]
};

var recipiePrinter = function(recipie) {
	console.log(recipie.title);
	console.log("Serves: " + recipie.servings);
	console.log("Ingredients: ");
	for (var i = 0; i < recipie.ingredients.length; i++) {
		console.log(recipie.ingredients[i]);
	}
};

recipiePrinter(recipieChickenCurry);

//The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var books = [
	{title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	read: false},

	{title: "Lord of the Rings",
	author: "J.R.R Tolkein",
	read: true},

	{title: "Pride and Prejudice",
	author: "Jane Austen",
	read: true},

	{title: "Mr. Mercedes",
	author: "Stephen King",
	read: false}
];

for (var i = 0; i < books.length; i++) {
	var book = books[i];
	console.log(book.title + " is written by " + book.author);
}

for (var i = 0; i < books.length; i++) {
	var book = books[i];
	if (book.read) {
		console.log("You already read " + book.title + " by " + book.author);
	} else {
		console.log("You still need to read " + book.title + " by " + book.author);
	}
}

//The Movie Database
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var movieGrandBudapest = {
	title: "The Grand Budapest Hotel",
	duration: 120,
	stars: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric", "Adrien Brody"]
};

var movieInfo = function(movie) {
	console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars.join(', '));

	// var info = [movie.title, 'lasts for', movie.duration, 'minutes. Stars: ', movie.stars].join(', ');
	// console.log(info);

};

movieInfo(movieGrandBudapest);

