//LeapYear 
// var leapYear = function(year) {

// 	var message;

// 	if(year % 4 === 0) {
// 	    if(year % 400 === 0) {
// 	        if(year % 100 === 0) {
// 	            message = year + " is  a Leap year";
// 	        } else {
// 	            message = year + " is not a Leap year";
// 	        }
// 	    } else {
// 	        message = year + " is a Leap year";
// 	    } 
// 	} else {
// 	    message = year + " is not a Leap year";
// 	}
// 	return message;
// 	//console.log(message);
// };

// //var yearInput = prompt("Enter a year");
// //console.log(leapYear(yearInput));
	
// console.log(leapYear(2000));
// console.log(leapYear(1996));
// console.log(leapYear(1997));
// console.log(leapYear(1990));


var isLeapYear = function (year) {

	if (year % 4 === 0 && (!(year % 100 === 0)) || (year % 400 === 0)) {
		return year + " is a leap year.";
	}
	else {
		return year + " is not a leap year.";
	}

};

var yearInput = prompt("Enter a year");
console.log(isLeapYear(parseInt(yearInput)));