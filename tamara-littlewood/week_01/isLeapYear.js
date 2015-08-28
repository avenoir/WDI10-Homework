var isLeapYear = function(year) {
//    year = prompt('What year would you like to test?');
    if (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

isLeapYear(1997);
isLeapYear(2000);
isLeapYear(1900);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(1300);
isLeapYear(1996);
isLeapYear(1997);

isLeapYear( prompt ( 'What number would you like to test?' ) ); // returns a string


var yearToTest = prompt ( "what number would you like to test?" );

isLeapYear (parseInt(yearToTest));