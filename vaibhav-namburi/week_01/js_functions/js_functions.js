var executeFunction = function ()
{
	var title=prompt("Enter title");
	var geoLocation=prompt("Enter geoLocation");
	var name=prompt("Enter name");
	var children=prompt("Enter children");
	alert("You will be a " + title + " in " + geoLocation + " and married to " + name + " with " + children + " kids");
}

// executeFunction();

var calcSnacks = function()
{
	var year=prompt("Which year were you born in");
	var age = (new Date().getFullYear()) - year;
	
	var maxAge=prompt("How old do you think you'll live till");
	var amount=prompt("How many snickers a day");

	var total=(maxAge - age)*amount*365;

	alert("Snacks " + total + " till " + maxAge);

}

// calcSnacks();

var calcArea= function(){
	var radius = prompt("Whats the radius you're looking at?");
	var func=prompt("Do you want to calculate area or circumference?");

	debugger;
	if (func !== "area" && func !== "circumference") {
		alert("wrong prompt");
	}
	else if(func === "area"){
		var area = Math.PI * Math.pow(radius,2);
		alert( Math.round(area));
	}
	else if(func === "circumference"){
		var circumferenc= 2 * Math.PI * radius;
		alert ( Math.round(circumferenc) );
	}

}

// calcArea();

var temp=function(){

	var func = prompt("do you want to convert to celcius or fahrenheit?");
	var number = prompt("Awesome enter the digits");

	if(func === "fahrenheit"){
		var farh=(number*9)/5 + 32;
		alert("your fahrenheit equivalent is " + farh);
	}

	else{
		var celc= ((number-32)*5)/9;
		alert("your celcius equivalent is " + celc);
	}

}

temp();
