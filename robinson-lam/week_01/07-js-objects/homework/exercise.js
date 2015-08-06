console.log("Exercise.js is working, hell yeah");

// Geometry Function Lab
// Part 1: Rectangle

var rectangle = {
  length: 4,
  width: 4,
};

var isSquare = function(rectangle) {
  if (rectangle.length === rectangle.width) {
    return true;
  } else {
    return false;
  }
};

var area = function(rectangle) {
  return rectangle.length * rectangle.width;
};

var perimeter = function(rectangle) {
  return (rectangle.length + rectangle.width) * 2;
};

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));

// Part 2: Triangle

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var isEquilateral = function(triangle) {
  if ((triangle.sideA === triangle.sideB) && (triangle.sideA === triangle.sideC)) {
    return true;
  } else {
    return false;
  }
};

var isIsosceles = function(triangle) {
  if ((triangle.sideA === triangle.sideB) || (triangle.sideA === triangle.sideC) || (triangle.sideB === triangle.sideC)) {
    return true;
  } else {
    return false;
  }
};

var area = function(triangle) {
  var p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  var heronFormula = Math.sqrt(p * ((p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC)));

  return area;
};

// JavaScript Bank

var JSBank = {
  accounts: [],

  totalBalance: function() {
    var totalBalance = 0;
    for (x = 0; x < this.accounts.length; x++) {
      totalBalance += this.accounts[x].balance;
    }
    console.log(totalBalance);
    return totalBalance;
  },

  addAccount: function(name, openingBalance) {
    this.accounts.push({
      name: name,
      balance: openingBalance,

      getBalance: function() {
        return "$" + this.balance + " in " + this.name + "'s account.";
      }
    });
  },

  withdraw: function(account, amount) {
    var testAmount = account.balance - amount;
    if (testAmount > 0) {
      account.balance -= amount;
      return true;
    } else {
      console.log("You cannot withdraw more than your balance");
      return false;
    }
  },

  deposit: function(account, amount) {
    account.balance += amount;
    return true;
  },

  transfer: function(accountFrom, accountTo, amount) {
    if (this.withdraw(accountFrom, amount)) {
      this.deposit(accountTo, amount);
      return true;
    } else {
      console.log("Transfer cancelled");
      return false;
    }
  }

};

JSBank.totalBalance();
JSBank.addAccount("Actually Zachary Fraser", 0);
JSBank.addAccount("Actually for reals Zachary Fraser", 20);
JSBank.addAccount("Roberto Nolastname", 2000000);
JSBank.addAccount("Not Zachary Fraser", 40);
JSBank.totalBalance();

JSBank.deposit(JSBank.accounts[1], 35);
console.log(JSBank.accounts[1].getBalance());
JSBank.withdraw(JSBank.accounts[1], 19);
console.log(JSBank.accounts[1].getBalance());

console.log(JSBank.accounts[2].getBalance());
JSBank.transfer(JSBank.accounts[1], JSBank.accounts[2], 100);
console.log(JSBank.accounts[1].getBalance());
console.log(JSBank.accounts[2].getBalance());

console.log(JSBank.accounts[2].getBalance());
JSBank.transfer(JSBank.accounts[1], JSBank.accounts[2], 10);
console.log(JSBank.accounts[1].getBalance());
console.log(JSBank.accounts[2].getBalance());
JSBank.totalBalance();
