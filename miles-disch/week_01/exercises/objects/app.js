/*
Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
coco
*/

var fishTacos = {
	title: 'fishTacos',
	serving: 2, //a number
	ingredients: ['tortillas', 'fish', 'salsa'] //array of strings
}  
var recipePrinter = function (recipe) {

	console.log(recipe.title);
	console.log('Serves:', recipe.serving);
	console.log('ingredients:');

// console.log(recipe.ingredients[0])
// console.log(recipe.ingredients[1])
// console.log(recipe.ingredients[2])

	for ( i = 0; i < recipe.ingredients.length; i++ ) {
		console.log(recipe.ingredients[i]);
	}	
}

recipePrinter(fishTacos);
/*
Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the output depending on whether you read it yet or not. If you read it, log a string like 'Ybook title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the ou already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

var readingList = [
	{
		title: 'book 1',
		author: "author 1", 
		alreadyRead: true //boolean 
	},
	{
		title: 'book 2',
		author: "author 2", 
		alreadyRead: false//boolean 
	},
	{
		title: 'book 3',
		author: "author 3", 
		alreadyRead: true//boolean 
	},
	{
		title: 'book 4',
		author: "author 4", 
		alreadyRead: true//boolean 
	}
]

for (i = 0; i < readingList.length; i++) {
	var book = readingList[i];
	if (book.alreadyRead === true) {
		console.log(book.title)
	}	
	else {
		console.log('you need to read this book ' + book.title)
	}
}


/*
It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/
var movies = [
	{
		title: 'sharknado',
		duration: 90,
		stars: ['miles disch', 'some dude', 'john galt', 'another Dude']
	},
	{
		title: 'another movies',
		duration: 90,
		stars: ['john doe', 'jack june', 'jazz apple']
	}
]

var printMovie = function (movie) {
	for (i = 0; i < movies.length; i++) {
		var movieList = movie[i]
		console.log(movieList.title + " lasts for " + movieList.duration + " minutes . " + "Stars: " + movieList.stars.join(', '))
	}	
}

printMovie(movies)






