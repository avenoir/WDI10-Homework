// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

var pageNode = document.getElementsByTagName('body')[0];
pageNode.style.fontFamily = 'Arial, sans-serif';

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

var nickname = document.getElementById('nickname');
var favourites = document.getElementById('favorites');
var hometown = document.getElementById('hometown');

nickname.innerHTML = " Swanny";
favourites.innerHTML = " Taylor, Beyonce";
hometown.innerHTML = "Avoca";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

var listItem = document.getElementsByClassName('listitem');


var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++){
	li[i].className = "listitem";
	listItem[i].style.color = 'red';
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var newImg = document.createElement('img');
newImg.src = "https://lh3.googleusercontent.com/Vz2FL3ntV3xdlDSe355LdpzbORWm9yX1O2IUl4hp6C0=w402-h536-no";
pageNode.appendChild(newImg);