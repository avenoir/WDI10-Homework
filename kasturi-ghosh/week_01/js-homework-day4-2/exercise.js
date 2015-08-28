// Bank program

var bank = {
  //the accounts
  accounts: [
  {accountNo: 1, ownerName: 'Tom', currentBalance: 10000}, 
  {accountNo: 2, ownerName: 'Lizzie', currentBalance: 12000}, 
  {accountNo: 3, ownerName: 'Tina', currentBalance: 2000},
  {accountNo: 4, ownerName: 'Jack', currentBalance: 200}
  ],

  //calculates total amount
  totalSum: function() {
    var sumTotal = 0;
    for (var i = 0; i < bank.accounts.length; i++) {
      sumTotal += bank.accounts[i].currentBalance; 
    }
    return sumTotal;
  },

  //creating new account
  addAccount: function(name, balance) {
    //cannot create accounts with amount negative
    if (balance > 0) {
      //generating account no.
      var i = bank.accounts.length;
      bank.accounts.push({accountNo: i+1, ownerName: name, currentBalance: balance});
      console.log("Congrats! Account for " + name + " has been created. Account number: " + (i + 1));
    }
    else {
      console.log("The account for " + name + " cannot be created. Amount is negative.")
    }
  },

  //make deposits
  depositAmount: function(accNo, amount) {
    //to check if account no exists or not
    var success = false;
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === accNo) {
        bank.accounts[i].currentBalance += amount;
        console.log("A deposit of " + amount + " has been made to " + bank.accounts[i].ownerName + "'s account. Total amount: " + bank.accounts[i].currentBalance);
        success = true;
      }
    }
    if (!(success)) {
      console.log("The account: " + accNo + " does not exist.");
    } 
  },

  //withdraw amount
  withdrawlAmount: function(accNo, amount) {
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === accNo) {
        //cannot withdraw if you withdrawl amount exceeds amount in your account
        if (bank.accounts[i].currentBalance >= amount) {
          bank.accounts[i].currentBalance -= amount;
          console.log("A withdrawl of " + amount + " has been made from " + bank.accounts[i].ownerName + "'s account. Remaining amount: " + bank.accounts[i].currentBalance);
        } else {
          console.log("Withdrawl amount exceeds total amount in your account. Your current balance is: " + bank.accounts[i].currentBalance + ". Please withdraw a lesser amount.");
        }
      }
    } 
  },

  //make internal transfers
  transferAmount: function(fromAccount, toAccount, transferAmount) {
    //cannot transfer if transfer amount exceeds amount in your account
    var transferFlag = true;
    for (var i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].accountNo === fromAccount) {
        if (bank.accounts[i].currentBalance >= transferAmount) {
          bank.accounts[i].currentBalance -= transferAmount;
        } else {
          console.log("You donot have enough amount in your account to make the transfer.");
          transferFlag = false;
        }
      }
    }
    //if transfer is allowed it calls the depositAmount function
    if (transferFlag) {
     bank.depositAmount(toAccount, transferAmount);
     console.log("Transfer successful from " + fromAccount + " to " + toAccount);
    }
 }
};

//statements to validate working of code
console.log("Total amount: " + bank.totalSum());

bank.addAccount('Aiden', 5000);
bank.addAccount('Dina', -4000);
bank.addAccount('Anita', 500);

console.log("Total amount in bank: " + bank.totalSum());

bank.depositAmount(1, 200);
bank.depositAmount(10, 100);
console.log("Total amount in bank: " + bank.totalSum());

bank.withdrawlAmount(2, 300);
bank.withdrawlAmount(4, 300);
console.log("Total amount in bank: " + bank.totalSum());

bank.transferAmount(3, 1, 50);
bank.transferAmount(4, 2, 5000);
console.log("Total amount in bank: " + bank.totalSum());

console.log(bank);
