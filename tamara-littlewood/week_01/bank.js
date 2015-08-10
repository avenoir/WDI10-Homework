
// JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. 
// The bank has many accounts and the following capabilities that you need to write.


// Bank

// There is only one bank. 
// This bank has an array of accounts. 
// The bank needs a method 
// that will return the total sum of money in the accounts. 
// It also needs an addAccount method
// that will enroll a new account at the bank 
// and add it to the array of accounts. 
// There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. 
// Accounts should be objects that all share a set of common functionality.

// var bank = { [ account, account, account ], method: return total sum of all accounts, method: new account }
// [ { account }, { account }, { account }];
// accounts = { owner, balance, method: withdraw, method: deposit }



var bank = { 
    accounts: [ ], // an array of account objects
    totalSum: function (  ) {
        var total = 0;
        for ( var i = 0; i < bank.accounts.length; i++ ) {
        total += bank.accounts[i].balance;
        }
        return total;
    },
    addAccount: function ( ) {
        return bank.accounts[ bank.accounts.length + 1 ] = { 
            ownerName: '',
            balance: 0,
            withdraw: function ( amount ) {
            return bank.accounts[ bank.accounts.length + 1 ].balance - amount;
            },
            deposit: function ( amount ) {
            return [ bank.accounts.length + 1 ] + amount;
            }
        }
    }
};



// Accounts

// Accounts have a current balance and owner's name. 
// You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. 
// Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story 
// through a series of JavaScript commands 
// that shows that the methods do indeed work as expected: 
// add some accounts, 
// show the total balance, 
// make some deposits and withdrawals, 
// show the new total balance.

// Tips

// Don't overthink this. Shorter code is probably the answer.



bank.accounts[0] = {
    ownerName: 'Reginald Russel',
    balance: 12,
    withdraw: function ( amount ) {
        return bank.accounts[0].balance - amount;
    },
    deposit: function ( amount ) {
        return bank.accounts[0].balance + amount;
    }
}
bank.accounts[1] = {
    ownerName: 'Regina Russel',
    balance: 132,
    withdraw: function ( amount ) {
        return bank.accounts[1].balance - amount;
    },
    deposit: function ( amount ) {
        return bank.accounts[1].balance + amount;
    }
}
bank.accounts[2] = {
    ownerName: 'Brisket Bushel',
    balance: 1082,
    withdraw: function ( amount ) {
        return bank.accounts[2].balance - amount;
    },
    deposit: function ( amount ) {
        return bank.accounts[2].balance + amount;
    }
}


//bank.totalSum( )
//bank;
//bank.addAccount();
//bank.accounts[2].balance.withdraw(42);
//bank.accounts[0].balance;
//bank.accounts[0].withdraw(7);

bank.totalSum();
console.log(bank);



// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

