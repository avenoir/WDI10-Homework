// var names = ['Groucho', 'Harpo','Chico'];
// var instruments = ['guitar', 'harp', 'piano'];
// var vices = ['cigars', 'hijinx', 'women'];

// var crapBrotherPrinter = function (index) {
// 	console.log (names[index] + ' playes the ' + instruments[index] + ' and enjoys ' + vices[index]);
// }



var bros = [
	{ name : 'Groucho', instrument: 'guitar' , vice: 'cigars'},
	{ name : 'Harpo', instrument: 'harp' , vice: 'hijinx'},
	{ name : 'Chico', instrument: 'piano' , vice: 'women'}
]

printBrother = function (brother) {
	console.log( brother.name + ' plays the ' + brother.instrument + ' and enjoys ' + brother.vice);
}


printBrother(bros[1]);

for (var i = 0; i < bros.length; i++) {
	printBrother(bros[i])
}

var vices = {
	groucho: 'cigars',
	harpo: 'hijinx',
	chico: 'women'
}

var instruments = {
	groucho: 'guitar',
	Harpo: 'harp',
	Chico: 'piano'
}

var objectBrotherPrinter = function ( name ) {
	console.log( name + ' plays ' + instruments[name])
}

objectBrotherPrinter('Groucho')

var brotherFactory = function (name, instruments, vice) {
	return {
		name: name,
		vice: vice,
		instrument: instruments, 
		play: function () {
			console.log( name + ' plays the ' + instruments)
		}
	}
};

var bros = [
	brotherFactory('Groucho', 'guitar', 'cigars'),
	brotherFactory('Harpo','Harpp', 'hijinx'),
	brotherFactory('Chico', 'Piano', 'women')
];

console.log(bros);

//Constructor
var Brother = function (name, instruments, vice) {
	this.name = name;
	this.instrument = instruments;
	this.vice = vice;

	return this;
};

var g = new Brother('Groucho', 'guitar', 'cigars');