// $(document).ready(function(){

// var Account = {

// 	balance: function(){
// 	return Checkings.balance + Savings.balance
// 	},
// 	checkingsvalidity:function(){
// 		var numberValue = parseInt(Checkings.$inputValue.val());

// 		Checkings.$balanceDisplay.text("$" +0);
// 		$("#checking").removeClass("account").addClass("zero");
// 		Savings.balance= (Account.balance() - numberValue);
// 		Savings.$balanceDisplay.text("$" + Savings.balance );
// 		alert("Go and get a job you lazy ass.");
// 	},
// 	savingsvalidity:function(){
// 		var numberValue = parseInt(Savings.$inputValue.val());

// 		Savings.$balanceDisplay.text("$" +0);
// 		$("#savings").removeClass("account").addClass("zero");
// 		Chekings.balance= (Account.balance() - numberValue);
// 		Chekings.$balanceDisplay.text("$" + Chekings.balance );
// 		alert("Go and get a job you lazy ass.");
// 	}


// }

// var Checkings = {
// 	$inputValue : $("#checking-amount"),
// 	$balanceDisplay: $("#checking-balance"),
// 	balance: 0,

// 	initialize:function(){
// 		$("#checking-deposit").on("click", function(){
// 			var numberValue = parseInt(Checkings.$inputValue.val()); 
// 			Checkings.balance += numberValue;
// 			Checkings.$balanceDisplay.text("$" + Checkings.balance ); 
// 			Checkings.$inputValue.val("");
// 		});

// 		$("#checking-withdraw").on("click", function(){
// 			var numberValue = parseInt(Checkings.$inputValue.val()); 

// 		if(Checkings.balance<numberValue && numberValue< Account.balance() ){

// 			Account.checkingsvalidity();

// 		}
// 		else{

// 			Checkings.balance -= numberValue;
// 			Checkings.$balanceDisplay.text("$" + Checkings.balance );
// 		}	


// 		});

// 		$("input").on("click",function(){

// 			console.log($(this).parent().attr("id"));

// 		});

		
// 	}


// }



// var Savings = {

// 	$inputValue : $("#savings-amount"),
// 	$balanceDisplay: $("#savings-balance"),
// 	balance: 0,
// 	initialize:function(){
// 		$("#checking-deposit").on("click", function(){
// 			var numberValue = parseInt(Checkings.$inputValue.val()); 
// 			Checkings.balance += numberValue;
// 			Checkings.$balanceDisplay.text("$" + Checkings.balance ); 
// 			Checkings.$inputValue.val("");
// 		});

// 		$("#checking-withdraw").on("click", function(){
// 			var numberValue = parseInt(Checkings.$inputValue.val()); 

// 		if(Checkings.balance<numberValue && numberValue< Account.balance() ){

// 			Account.checkingsvalidity();

// 		}
// 		else{

// 			Checkings.balance -= numberValue;
// 			Checkings.$balanceDisplay.text("$" + Checkings.balance );
// 		}	


// 		});

// 		$("input").on("click",function(){

// 			console.log($(this).parent().attr("id"));

// 		});

		
// 	}

		
// 	}

// }



// Checkings.initialize();
// Savings.initialize();


// });