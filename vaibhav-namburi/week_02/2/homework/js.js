Array.prototype.map = function(func) {
	var results=[];

	this.forEach(function(value){

		results.push(func(value));

	});

	return results;
};

array.map(function(value){
	return value.symbol

});