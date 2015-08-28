var body = document.querySelector("body");

body.style.fontFamily = "Arial, sans-serif";

var spans = document.getElementsByTagName("span");

spans[0].id="name";
spans[1].id="favs"
spans[2].id="home"

spans[0].innerHTML="miles disch";
spans[1].innerHTML="stuff";
spans[2].innerHTML="beijing";

var lists = document.getElementsByTagName("li")

console.log(lists)

for (var i = 0; i < lists.length; i++) {
	lists[i].className = "listitem";
}  

var listsClass = document.querySelectorAll(".listitem")
for (var i = 0; i < lists.length; i++) {
	listsClass[i].style.color = 'red'
}


var newImg = document.createElement('img');

newImg.src = "http://www.fillmurray.com/200/300"

body.appendChild(newImg);