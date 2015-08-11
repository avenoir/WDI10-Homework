// If the number contains 3 as a prime factor, output 'Pling'.
// If the number contains 5 as a prime factor, output 'Plang'.
// If the number contains 7 as a prime factor, output 'Plong'.

// var plingPlangPlong = function(number) {
//   var result = "";
//   if ( !(number % 3) ) {
//     result += "Pling";
//   }
//   if ( !(number % 5) ) {
//     result += "Plang";
//   }
//   if ( !(number % 7) ) {
//     result += "Plong";
//   }

//   if (result) {
//     return result;
//   } else {
//     return number.toString();
//   }
// };

var factors=[3 ,5 ,7];

var number = parseInt(prompt("enter a number"));

var string = "";

for(var i=0 ; i< factors.length ; i++){

	if(number % factors[i] === 0 ){

		console.log('success');

		if(factors[i] === 3){			

			string = string + ("Pling");
		}

		if(factors[i] === 5){

			string = string + ("Plang");
		}

		if(factors[i] === 7){

			string = string + ("Plong");
		}
	}
}

if(string.length===0){
		console.log(number.toString());
}
else{
console.log(string);
}