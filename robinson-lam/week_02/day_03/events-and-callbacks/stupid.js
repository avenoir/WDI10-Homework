var makeMadLib = function() {

  var madLib = {
    noun: document.getElementById("noun").value,
    adjective: document.getElementById("adjective").value,
    person: document.getElementById("person").value,
  }
// why did i even make an object
  var stupidStory = (madLib.person + " is a stupidly " + madLib.adjective + " " + madLib.noun + ".");

  document.getElementById("story").innerHTML = stupidStory;
}

var makeMadLibButton = document.getElementById("lib-button");

makeMadLibButton.addEventListener("click", makeMadLib);
