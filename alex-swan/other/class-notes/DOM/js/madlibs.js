// Add an event listener to the button so that it calls a makeMadLib function when clicked.
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

  
var makeMadLib = function(event) {
    var noun = document.getElementById('noun').value;
    var adj = document.getElementById('adjective').value;
    var person = document.getElementById('person').value;
    var output = [person, "can't stand", adj, noun].join(' ');
    document.getElementById('story').innerHTML = output;
};

var button = document.getElementById('lib-button');
button.addEventListener('click', makeMadLib);
