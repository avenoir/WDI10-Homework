var body = document.getElementsByTagName("body")[0];
body.style.fontFamily = "Arial, sans-serif";

var robinson = {
	nickname: "Rob",
	favorites: ["food", "sleep"],
	hometown: "Cabramatta"
}

var nickname = document.getElementById("nickname");
var favorites = document.getElementById("favorites");
var hometown = document.getElementById("hometown");

nickname.innerHTML = robinson.nickname;
favorites.innerHTML = robinson.favorites.join(" & ");
hometown.innerHTML = robinson.hometown;

var listItems = document.getElementsByTagName("li");

for ( x = 0; x < listItems.length; x++) {
	listItems[x].className = "listitem";
	listItems[x].style.color = "red";
}

var image = document.createElement('img');

image.src = 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xat1/t31.0-8/10537941_10205997613923896_7580446747387764873_o.jpg';


body.appendChild(image);

image.style.width = "400px";
image.style.borderRadius = "5px";