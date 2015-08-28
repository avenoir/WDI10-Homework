$(document).ready(function(){

var Account = {

	balance: function(){
	return checking.balance + savings.balance
	},
	validity:function(accountType){
		var numberValue = parseInt(accountType.$inputValue.val());
		var alternateAccount = (accountType.name==="checking" ? savings : checking);	//selects the alternate account from the passed in account, to deduct money

		alternateAccount.balance= (Account.balance() - numberValue);		// remaining is total-withdrawn
		alternateAccount.$balanceDisplay.text("$" + alternateAccount.balance );
		accountType.balance=0;					//calling accounts balance is set to zero after subtraction to allow formula to work
		accountType.$inputValue.val("");		//sets the input form to nothing
	}
}

function Bank(name){		//create a prototype of which object instances can be made
	var self = this;			// setting the current calling object to variable self;
	this.name=name;
	this.balance=0;
	this.$inputValue = $("#"+name+"-amount");
	this.$balanceDisplay=$("#"+name+"-balance");
													//set property names to help globalize IDs
	this.initialize=function(){
		$("#"+name+"-deposit").on("click", function(){
			var numberValue = parseInt(self.$inputValue.val()); 

			self.balance += numberValue;
			self.$balanceDisplay.text("$" + self.balance );
			$("#"+self.name).removeClass("zero").addClass("account"); 
			self.$inputValue.val("");							//self is used instead of "this" as this will be local to the event handler
		});

		$("#"+name+"-withdraw").on("click", function(){
			var numberValue = parseInt(self.$inputValue.val()); 

			if(self.balance<numberValue && numberValue< Account.balance()){

				self.$balanceDisplay.text("$" +0);
				$("#"+self.name).removeClass("account").addClass("zero");		//switches the color of current account to red

				Account.validity(self);		//calls on the validity function of the account object and sends the calling object instance as an arguement

			}

			else{
			self.balance -= numberValue;						//if above is false then this is executed
			self.$balanceDisplay.text("$" + self.balance );
			self.$inputValue.val("");
			}

		});
	}
}

var checking = new Bank("checking"); checking.initialize();

var savings = new Bank("savings"); savings.initialize();

});