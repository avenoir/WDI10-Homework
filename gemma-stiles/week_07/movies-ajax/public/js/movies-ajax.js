var getMovie = function () {
	var client = new XMLHttpRequest();
	client.onreadystatechange = function () {
	console.log(client.responseText);
	};
};	

// () {
// console.log(client.responseText);
// }

// client.open('GET', 'http://omdbapi.com/?t=alien')

// client.send

// };
