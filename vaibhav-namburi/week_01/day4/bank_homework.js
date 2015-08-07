var Bank = {

    accountArray: [],

    totalAccounts: 0,

}

Bank.addAccount = function(ownersName, amount) {

    var ownersName = {

        ownerName: ownersName,
        cash: amount

    };
    Bank.accountArray.push(ownersName);
    Bank.totalAccounts++;

}

Bank.addMoney = function(accountName, topUp) {

    for (x in Bank.accountArray) {

    	var temp = Bank.accountArray[x];

        if (temp.ownerName === accountName) {

            temp.cash += topUp;

            console.log("Top Up successful " + " total is  " + temp.cash); break;
        }
    }
}


Bank.removeMoney = function(accountName, rem) {

    for (x in Bank.accountArray) {

        var temp = Bank.accountArray[x];

        if (temp.ownerName === accountName) {

            if ((temp.cash - rem) > 0) {
                temp.cash -= rem;
                console.log("Withdrawl successful " + " total is  " + temp.cash); break;            
            }
            else {
                    console.log("sorry you don't have enough to complete that transaction: " + temp.cash); break;
            }
        }
    }
}

Bank.status = function(accountName){

	for (x in Bank.accountArray) {

        var temp = Bank.accountArray[x];

        if (temp.ownerName === accountName) {

        	console.log([accountName,temp.cash].join(" "));
        }
	}
}

Bank.transfer = function(fromAccount,toAccount,amount){

	Bank.removeMoney(fromAccount,amount);
	Bank.addMoney(toAccount,amount);
	

	console.log([amount,"was transferred from",fromAccount,"'s","account","to",toAccount].join(" "));

}

Bank.addAccount("bob", 83);
Bank.addAccount("alex", 34);
Bank.addAccount("tim", 42);

Bank.addMoney("bob", 10);

Bank.removeMoney("alex", 100);

Bank.transfer("bob","alex",50);

Bank.status("bob");






