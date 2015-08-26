console.log("Exercise.js is working, hell yeah");

// Geometry Function Lab
// Part 1: Rectangle

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

var rectangle = {
  length: 4,
  width: 4,
};

console.log(isSquare(rectangle));
console.log(area(rectangle));
console.log(perimeter(rectangle));

// Part 2: Triangle

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

var isObtuse = function(triangle) {
  var temp;
  var sides = [triangle.sideA, triangle.sideB, triangle.sideC];

  // sort ascending
  for (x = 0; x < sides.length - 1; x++) {
    if (sides[x] > sides[x + 1]) {
      temp = sides[x];
      sides[x] = sides[x + 1];
      sides[x + 1] = temp;
    }
    console.log(sides);
  }

  if ((Math.sqrt(sides[0]) + Math.sqrt(sides[1])) < Math.sqrt(sides[2])) {
    return true;
  } else {
    return false;
  }
};

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
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
