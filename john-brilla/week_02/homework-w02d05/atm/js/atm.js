var Bank = {
    //AMOUNTS
    checkingBalance: 0,

    savingsBalance: 0,

    totalBalance: function() {

        return Bank.checkingBalance + Bank.savingsBalance;

    },

    //Deposit Money into account
    depositMoney: function() {
        //get input
        var depositValue = parseInt($(this).siblings('input#amount').val());

        //Check if number
        if (isNaN(depositValue)) {

            return Bank.message("Your input was't valid, please try again"); //console.log(depositValue, 'is not a number');

        }

        //get id of clicked button
        var grabId = $(this).siblings('div.balance')[0].id;
        //check if checking or savings
        var currentBalance = (grabId === 'checking-balance') ? Bank.checkingBalance : Bank.savingsBalance;
        //get location of button clicked
        var inputLocation = $(this).siblings('div.balance');
        
        //new value to add to account
        var newBalance = depositValue + currentBalance;

        //Add to JS variable in Bank - Which account
        if ($(this).siblings('div.balance')[0].id === 'checking-balance') {
            console.log('Putting into checking');
            Bank.checkingBalance += depositValue;
        } else {
            console.log('Putting into savings')
            Bank.savingsBalance += depositValue;
        }

        //account zero notifier 
        Bank.isBalanceZero();

        //MESSAGE
        Bank.message( '$' + $(this).siblings('input#amount').val() + ' was succefully put into your account. Your total bank balance is now : $' + Bank.totalBalance());

        console.log(newBalance, $(this).siblings('input#amount').val(), $(this).siblings('div.balance')[0].id);
        //returns new value to screen
        return $(inputLocation).text('$' + newBalance);

    },

    withdrawMoney: function() {
        //gets input
        var withdrawValue = parseInt($(this).siblings('input#amount').val());
        //Check if number

        if (isNaN(withdrawValue)) {

            return Bank.message("Your input was't valid, please try again"); //console.log(withdrawValue, 'is not a number');

        }

        //get id of clicked button
        var grabId = $(this).siblings('div.balance')[0].id;
        //check if checking or savings
        var currentBalance = (grabId === 'checking-balance') ? Bank.checkingBalance : Bank.savingsBalance;
        //get location of button clicked
        var inputLocation = $(this).siblings('div.balance');

        //** if wM is greater than cB -> && -> if wM is greater than tB 
        //** cancel transaction and alert client 
        if (withdrawValue >= currentBalance && withdrawValue > Bank.totalBalance()) {
            
            //console.log('You can not withdraw that much money. ', Bank.checkingBalance, Bank.savingsBalance);
            
            return Bank.message('You can not withdraw that much money. Total Bank Balance: $' + Bank.totalBalance()); 

        }

        //For CHECKING - checking if we need to grab from opposite bank account as well as current account 
        if (withdrawValue >= currentBalance && withdrawValue <= Bank.totalBalance() && grabId === 'checking-balance') {
            //For Checking Account
            //Gets new value after subtracting from the current Balance
            var newWithdrawValue = currentBalance - withdrawValue;
            //Subtracts the remainder from other account;
            var takeFromOtherAccount = Bank.savingsBalance - Math.abs(newWithdrawValue)

            //Set values of Bank Accounts;
            Bank.checkingBalance = 0;
            Bank.savingsBalance = takeFromOtherAccount;

            //Loads it to page
            $('#checking-balance').text('$0');
            $('#savings-balance').text('$' + Bank.savingsBalance);

            console.log(' Checking : ', Bank.checkingBalance, 'Savings: ', Bank.savingsBalance);

            //account zero notifier 
            Bank.isBalanceZero();

            //For SAVINGS - checking if we need to grab from opposite bank account as well as current account
        } else if (withdrawValue >= currentBalance && withdrawValue <= Bank.totalBalance() && grabId === 'savings-balance') {
            //For Savings Account
            //Gets new value after subtracting from the current Balance
            var newWithdrawValue = currentBalance - withdrawValue;
            //Subtracts the remainder from other account;
            var takeFromOtherAccount = Bank.checkingBalance - Math.abs(newWithdrawValue)

            //Set values of Bank Accounts;
            Bank.savingsBalance = 0;
            Bank.checkingBalance = takeFromOtherAccount;

            //Loads values to page
            $('#checking-balance').text('$' + Bank.checkingBalance);
            $('#savings-balance').text('$0');

            console.log(' Savings: ', Bank.savingsBalance, 'Checking: ', Bank.checkingBalance);

            //account zero notifier 
            Bank.isBalanceZero();


        }

        //Grabs money from current bank account
        if (withdrawValue < currentBalance) {
            //new value to add to account
            var newBalance = currentBalance - withdrawValue;

            //Add to JS variable in Bank - Which account
            if ($(this).siblings('div.balance')[0].id === 'checking-balance') {
                
                console.log('Taking from checking account.');
                Bank.checkingBalance -= withdrawValue;
                console.log('Checking: ', Bank.checkingBalance);

            } else {
                
                console.log('Taking from savings account.')
                Bank.savingsBalance -= withdrawValue;
                console.log('Savings: ', Bank.savingsBalance)

            }

            //Loads value to page
            $(inputLocation).text('$' + newBalance);

        }

        //MESSAGE
            Bank.message( '$' + $(this).siblings('input#amount').val() + ' was succefully withdrawn form your account. Your total bank balance is now : $' + Bank.totalBalance());

    },

    isBalanceZero: function() {
        var red = 'red';
        var noColor = '';
        var checkingRed = (Bank.checkingBalance <= 0) ? red : noColor;
        var savingsRed = (Bank.savingsBalance <= 0) ? red : noColor;

        $('#checking-balance').css("background-color", checkingRed);
        $('#savings-balance').css("background-color", savingsRed);
    },

    message: function ( message ) {

        $('div.message').text('MESSAGE: ' + message);

    },


    //click functions
    init: function() {

        //Deposit
        $('#checking-deposit').on('click', Bank.depositMoney);  //Bank.depositMoney
        $('#savings-deposit').on('click', Bank.depositMoney);
        //Withdraw
        $('#checking-withdraw').on('click', Bank.withdrawMoney);
        $('#savings-withdraw').on('click', Bank.withdrawMoney);
    }
};

// The only thing waiting for the DOM is .init();
$(document).ready(function() {
    Bank.init();

    //account zero notifier
    Bank.isBalanceZero();
});