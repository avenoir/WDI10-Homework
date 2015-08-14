// We need a function that receives a number
// We need to add pling to a string if that number is divisible evenly by 3
// We need to add plang to a string if that number is divisible evenly by 5
// We need to add plong to a string if that number is divisible evenly by 7
// If the number isn't divisible by 3, 5, or 7 we return the number as a string

var convert = function ( num ) {
  var str = "";

  if ( num % 3 === 0 ) {
    str += "Pling";
  }
  if ( num % 5 === 0 ) {
    str += "Plang";
  }
  if ( num % 7 === 0 ) {
    str += "Plong";
  }

  if ( str.length === 0 ) {
    return num + "";
    // return num.toString();
  }
  return str;
}