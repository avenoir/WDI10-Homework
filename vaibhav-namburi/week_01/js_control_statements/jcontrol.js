var exercise1= function(){
var input = prompt("enter two numbers");
var array = input.split(" ");
var message;
		if(array[0] > array[1])
		{
			message = array[0] + " was bigger out of " + array;
		}
		else
		{
			message = array[1] + " was bigger out of " + array;
		}

	return message;
}

// alert(exercise1());

var exercise2 = function(){

	var language = prompt(" enter es , de , en ");

		switch (language)
		{

			case "es" : alert("hola mundo")
			break;

			case " de" : alert("hallo Welt")
			break;

			default:
			alert("Hello World")
			
		}

}

// exercise2();

var assignGrade = function(){

	var grade = prompt("Enter marks");
	grade = parseInt(grade);

		if (grade<45){	alert("Fail");  }

		else if (grade<55){  alert("D");  }
			
		else if (grade<65){  alert("C");  }

		else if (grade<80){  alert("B");  }

		else if (grade<100){  alert("A");  }

		else {	alert("incorrent mark"); }

}

// assignGrade();

var exercise4 = function(){

	var noun = prompt("Enter a noun");
	var number = prompt("Enter a number");
	var message;

	if(number>1)
	{
		noun = noun + "s";
		message = number + " " + noun;
	}

	else
	{
		message = number + " " + noun;
	}

	return message;

}

alert(exercise4());
