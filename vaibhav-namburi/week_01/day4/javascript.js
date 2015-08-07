// First one

var recipe = {

    title: "lame",
    servings: 5,
    ingredients: ["carrots", "juice", "coffee", "redbull"]

}

for (x in recipe) {

    if (recipe[x] instanceof Array) {

        // console.log(x + ":");

        for (y in recipe[x]) {

            // console.log(recipe[x][y]);

        }
    } else {
        // console.log(x + " : " + recipe[x]);
    }

}

//  Second One

var books = [{
        title: "cool book",
        author: "big guy",
        alreadyRead: true
    },

    {
        title: "really cool book",
        author: " really big guy",
        alreadyRead: false
    },

    {
        title: "meeh book",
        author: "meeh guy",
        alreadyRead: false
    }

];


for (x in books) {

	var book = books[x];

    if (book.alreadyRead) {
        // console.log("You have already read " + book.title + " by " + book.author);
    } else {
        // console.log("You have yet to read " + book.title + " by " + book.author);
    }
}


var coolMovie = {

	title: "AWESOME MOVIE",
	duration: 10000,
	stars: ["big guy", "little guy", "medium girl"]

}
var movieFormatter = function(m){
	var actors= m.stars.join(" , ");

	var info  = [m.title, "lasts for", m.duration, "minutes","and stars", actors].join(" ");

	return info;

}


console.log( movieFormatter(coolMovie) );










