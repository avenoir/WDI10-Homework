var bank = {
    accounts: [{
        balance: 0,
        name: 'John Doe'
    }, 
    {
        balance: 60500,
        name: 'John Galt'
    }, 
    {
        balance: 8000,
        name: 'Jack Wild'
    }],

    deposit: function(amount, whom) {
        for (var i = 0; i < bank.accounts.length; i++) { // loops through all accounts
            if (whom === bank.accounts[i].name) { // if the name of the account matches the input then run
                return bank.accounts[i].balance += amount // the amount is added to the accounts bala
            }
        }
        return "We don't have anyone with that name";
    },

    withdraw: function(amount, whom) {
        for (var i = 0; i < bank.accounts.length; i++) {
            if (whom === bank.accounts[i].name) {
                return bank.accounts[i].balance -= amount
            }
        }
        return "We don't have anyone with that name";
    },

    totalBalance: function() { // cant get bank to work. Calling the function in the console will return me vaules 0.
        var totalBalance = 0;
        for (var i = 0; i < bank.accounts.length; i++) {
            bank.accounts[i].balance += totalBalance;
        }
        return totalBalance;
    },

    addAccount: function(n, b) {
        var newAccount = {}
        for (var i = 0; i < bank.accounts.length; i++) {
            if (bank.accounts[i].name === n) {
                console.log('this account exsists!')
            }
        }
        for (var j = 0; j < bank.accounts.length; i++) {
        	if (bank.accounts[i].name !== n)
        		bank.accounts.push({name: n, balance: b})
        }
    }
}