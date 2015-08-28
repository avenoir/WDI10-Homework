console.log("Exercise.js is working, hell yeah");

// Exercise 1: The Recipe Card
console.log("\nExercise 1: The Recipe Card");
var favoriteRecipe = {
  name: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log("==========================");
console.log("|| " + favoriteRecipe.name);
console.log("==========================");
console.log("Serves: " + favoriteRecipe.servings);
console.log("Ingredients:\n");
for (x = 0; x < favoriteRecipe.ingredients.length; x++) {
  console.log("- " + favoriteRecipe.ingredients[x]);
}

// Exercise 2: The Reading List 
console.log("\nExercise 2: The Reading List");
var books = [{
  name: "The Name of the Wind",
  author: "Patrick Rothfuss",
  alreadyRead: false
},{
  name: "Seven Ancient Wonders",
  author: "Matthew Reilly",
  alreadyRead: true
},{
  name: "The Tournament",
  author: "Matthew Reilly",
  alreadyRead: true
}];

for (x = 0; x < books.length; x++) {
  if (books[x].alreadyRead) {
    console.log("You have already read '" + books[x].name + "' by " + books[x].author);
  } else {
    console.log("You have yet to read '" + books[x].name + "' by " + books[x].author);
  }
}

// Exercise 3: The Movie Database
console.log("\nExercise 3: The Movie Database");
var favoriteMovie = {
  name: "Puff the Magic Dragon",
  duration: 2,
  stars: [ "Puff", "Jackie" ]
};

console.log("'" + favoriteMovie.name + "' lasts for " + favoriteMovie.duration + " minutes. Stars: " + favoriteMovie.stars.join(", "));
