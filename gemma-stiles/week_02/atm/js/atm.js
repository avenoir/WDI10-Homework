//    $$\       $$\       $$\           $$$$$$\ $$$$$$$$\ $$\      $$\       $$\        $$$$$$\  $$$$$$$\           $$\       $$\       $$\    
//  $$$$$$\   $$$$$$\   $$$$$$\        $$  __$$\\__$$  __|$$$\    $$$ |      $$ |      $$  __$$\ $$  __$$\        $$$$$$\   $$$$$$\   $$$$$$\  
// $$  __$$\ $$  __$$\ $$  __$$\       $$ /  $$ |  $$ |   $$$$\  $$$$ |      $$ |      $$ /  $$ |$$ |  $$ |      $$  __$$\ $$  __$$\ $$  __$$\ 
// $$ /  \__|$$ /  \__|$$ /  \__|      $$$$$$$$ |  $$ |   $$\$$\$$ $$ |      $$ |      $$$$$$$$ |$$$$$$$\ |      $$ /  \__|$$ /  \__|$$ /  \__|
// \$$$$$$\  \$$$$$$\  \$$$$$$\        $$  __$$ |  $$ |   $$ \$$$  $$ |      $$ |      $$  __$$ |$$  __$$\       \$$$$$$\  \$$$$$$\  \$$$$$$\  
//  \___ $$\  \___ $$\  \___ $$\       $$ |  $$ |  $$ |   $$ |\$  /$$ |      $$ |      $$ |  $$ |$$ |  $$ |       \___ $$\  \___ $$\  \___ $$\ 
// $$\  \$$ |$$\  \$$ |$$\  \$$ |      $$ |  $$ |  $$ |   $$ | \_/ $$ |      $$$$$$$$\ $$ |  $$ |$$$$$$$  |      $$\  \$$ |$$\  \$$ |$$\  \$$ |
// \$$$$$$  |\$$$$$$  |\$$$$$$  |      \__|  \__|  \__|   \__|     \__|      \________|\__|  \__|\_______/       \$$$$$$  |\$$$$$$  |\$$$$$$  |
//  \_$$  _/  \_$$  _/  \_$$  _/                                                                                  \_$$  _/  \_$$  _/  \_$$  _/ 
//    \ _/      \ _/      \ _/                                                                                      \ _/      \ _/      \ _/   


$(document).ready(function() {

// set the background color to red if a balance is zero, calling on the .zero class that was alraedy listed in the css, remove the class otherwise
 var highlightZeroBalance = function() {
    if (checkingBalance === 0) {
      $("#checking-balance").addClass("zero");
    } else {
      $("#checking-balance").removeClass("zero");
    }

    if (savingsBalance === 0) {
      $("#savings-balance").addClass("zero");
    } else {
      $("#savings-balance").removeClass("zero");
    }
  }

// set all initial balances to zero and call the highlightZeroBalance function so that backgrounds start red 
  var checkingBalance = 0;
  var checkingAmount  = 0;
  var savingsBalance  = 0;
  var savingsAmount   = 0;
  highlightZeroBalance();

// take text input and turn it into an integer, remove $ sign
  var getBalancesAndAmounts = function() {
    checkingBalance = parseInt($("#checking-balance").text().replace('$', ''));
    checkingAmount  = parseInt($("#checking-amount").val());
    savingsBalance  = parseInt($("#savings-balance").text().replace('$', ''));
    savingsAmount   = parseInt($("#savings-amount").val());
  }

// update display to show new balance for both accounts and display $ sign
  var updateDisplay = function() {
    $("#checking-balance").text("$" + checkingBalance);
    $("#savings-balance").text("$" + savingsBalance);
    highlightZeroBalance();
  }

// update checking balance display on click if number is entered, doesn't allow NaN to be submitted 
  $("#checking-deposit").on('click', function() {
    getBalancesAndAmounts();
    if (!isNaN(checkingAmount)) {
      checkingBalance += checkingAmount;
    }
    updateDisplay();
  });

// overdraft function for checking account, will pull from savings if not enough in account
  $("#checking-withdraw").on('click', function() {
    getBalancesAndAmounts();

    if (checkingAmount <= checkingBalance) { // if withdraw amount <= balance amount
      checkingBalance -= checkingAmount;
    } else { // if withdraw amount > checking balance amount
      if (checkingAmount <= (checkingBalance + savingsBalance)) { // if withdraw amount < balance + savings
        savingsBalance -= (checkingAmount - checkingBalance);
        checkingBalance = 0;
      }
    }

    updateDisplay();
  });

// update savings balance display on click if number is entered, doesn't allow NaN to be submitted
  $("#savings-deposit").on('click', function() {
    getBalancesAndAmounts();
    if (!isNaN(savingsAmount)) {
      savingsBalance += savingsAmount;
    }
    updateDisplay();
  });

// overdraft function for savings account, will pull from checking if not enough in account
  $("#savings-withdraw").on('click', function() {
    getBalancesAndAmounts();

    if (savingsAmount <= savingsBalance) { // if withdraw amount <= balance amount
      savingsBalance -= savingsAmount;
    } else { // if withdraw amount > savings balance amount
      if (savingsAmount <= (savingsBalance + checkingBalance)) { // if withdraw amount < balance + checking
        checkingBalance -= (savingsAmount - savingsBalance);
        savingsBalance = 0;
      }
    }
    updateDisplay();
  });

});

