var plingPlangPlong = function(n){
	var output = "";
	if (n % 3 === 0){
		output += "Pling";
		}
	if (n % 5 === 0){
		output += "Plang";
	}
	if (n % 7 === 0){
		output += "Plong";
	}
	return output || String(n); 
};

//console.log(plingPlangPlong(28));
//console.log(plingPlangPlong(1755));
//console.log(plingPlangPlong(34));

// find numbers all numbers up to 1000 divisible by 3,5 and 7.
for (i = 0; i < 10000; i++){
	if (plingPlangPlong(i) === "PlingPlangPlong") {
		console.log(i, plingPlangPlong(i));
	}
}