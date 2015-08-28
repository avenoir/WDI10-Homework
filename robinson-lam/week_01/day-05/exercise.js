// Pling Plong Plang
//

var plingPlangPlong = function(number) {
  var result = "";
  if ( !(number % 3) ) {
    result += "Pling";
  }
  if ( !(number % 5) ) {
    result += "Plang";
  }
  if ( !(number % 7) ) {
    result += "Plong";
  }

  if (result) {
    return result;
  } else {
    return number.toString();
    // return number + ""; // Also converts to string
  }
};

console.log(plingPlangPlong(28));
console.log(plingPlangPlong(1755));
console.log(plingPlangPlong(34));

