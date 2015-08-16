$(document).ready(function(){

var Account = {

	balance: function(){
	return checking.balance + savings.balance
	},
	validity:function(accountType){
		var numberValue = parseInt(accountType.$inputValue.val());
		var alternateAccount = (accountType.name==="checking" ? savings : checking);	

		alternateAccount.balance= (Account.balance() - numberValue);		
		alternateAccount.$balanceDisplay.text("$" + alternateAccount.balance );
		accountType.balance=0;					
		accountType.$inputValue.val("");		
	}
}

function Bank(name){		
	var self = this;			
	this.name=name;
	this.balance=0;
	this.$inputValue = $("#"+name+"-amount");
	this.$balanceDisplay=$("#"+name+"-balance");
													
	this.initialize=function(){
		$("#"+name+"-deposit").on("click", function(){
			var numberValue = parseInt(self.$inputValue.val()); 

			self.balance += numberValue;
			self.$balanceDisplay.text("$" + self.balance );
			$("#"+self.name).removeClass("zero").addClass("account"); 
			self.$inputValue.val("");							
		});

		$("#"+name+"-withdraw").on("click", function(){
			var numberValue = parseInt(self.$inputValue.val()); 

			if(self.balance<numberValue && numberValue< Account.balance()){

				self.$balanceDisplay.text("$" +0);
				$("#"+self.name).removeClass("account").addClass("zero");		
				Account.validity(self);		

			}

			else{
			self.balance -= numberValue;						
			self.$balanceDisplay.text("$" + self.balance );
			self.$inputValue.val("");
			}

		});
	}
}

var checking = new Bank("checking"); checking.initialize();

var savings = new Bank("savings"); savings.initialize();

});