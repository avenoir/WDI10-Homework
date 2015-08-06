var isLeapYear = function (year){
	if(year % 4 === 0 && (!(year % 100 === 0 )||(year % 400 === 0))) {
		return year + " is a leap year!";
	}
	else {
		return "Is not a leap year";
	}
}

console.log(isLeapYear(prompt("Whats your year")));