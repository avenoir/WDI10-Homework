// 	var myString = "echoHello";
// window[myString] = function() {
//     alert("Hello!");
// }

// echoHello();

var Bank = {

    accountArray: []

}


function account(accountName, amount){

	this.accountName = accountName;
	this.amount = amount;

}

account.setAccount = function(accountName1, amount1){

	window[accountName1] = new account(accountName1,amount1);

	Bank.accountArray.push(window[accountName1]); // var name = accountName1;

}



var addMoney = function (person, money){

	 // var owner = person;// var owner = person;   

	window[person].amount +=money;

	console.log(["added",money,"total is now",window[person].amount ].join(" "));  // var owner = person;

}



var withdrawMoney = function (person, money){

	window[person].amount -= money;

	console.log(["added",money,"total is now",window[person].amount ].join(" "));  // var owner = person;

}



var findStatus  = function(person){


	console.log(window[person]); // var name = person;

}



var transfer =  function(person1, person2, money){

	withdrawMoney(person1,money);
	addMoney(person2,money);
	console.log([money,"was transferred from",person1,"'s","account","to",person2,"'s"].join(" "));

}

var bankStatus = function(){

	var buffer = 0;

	for(x in Bank.accountArray){ buffer+= Bank.accountArray[x].amount; }

	console.log(["The total amount saved in this bank is:",buffer,"in", Bank.accountArray.length,"accounts"].join(" "));
}

account.setAccount("bob", 95);
account.setAccount("alex", 34);
account.setAccount("tim", 64);

addMoney("bob", 10);

withdrawMoney("alex",6);

findStatus("bob");

bankStatus();

