const account = require("./account")

function userAccount(pin){
    if(userInput === account.pin){
        return true;
    }else if(userInput != account.pin){
        return("That pin is incorrect. Please try again")
    }
}
console.log(account.pin); 