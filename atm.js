const {pin, Userbal} = require("./account")
function mainMenu(){
    let balance = "1";
    let withdraw = "2";
    let deposit = "3";
    let quit = "4";
    if(userInput === "1"){
        return getBal;
    }else if(userInput === "2"){
        return getWithdrawal;
    }else if(userInput === "3"){
        return letDeposit;
    }else if(userInput === "4")
    return 
}
function getBal(){
    return balance;
}
function getWithdrawal(num){
    return balance -= num;
}
function letDeposit(num){
    return balance += num;
}
function correctPin(){
    let accessGranted = false;
    let attempts = 2;

while(attempts <= 0){
    let userInput = prompt();
    if(userInput != pin){
        console.log('That is not the correct pin. ${correctPin} left.');
        attempts--;
    }
    else if(userInput === pin){
        accessGranted = true;
        return accessGranted;
    }
}
if(attempts = 0){
    console.log("Your card has now been locked and your bank has been notified. Please contact your bank for further information or help.");
}
}
module.exports = {
    theBal: getBal, lessBal: getWithdrawal, moreBal: letDeposit, thatPin: correctPin, menu:mainMenu   
}