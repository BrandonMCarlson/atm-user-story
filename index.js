const {theBal, lessBal, moreBal, thatPin, menu} = require("./atm"); 

const prompt = require("prompt-sync")();
console.log("What is your pin?");
const checkPin = prompt();

function pinChecker(userInput){
    if(pinChecker === thatPin){
        return true;
    }else if(pinChecker != thatPin){
        console.log("Please try again");
        return pinChecker;
    }
}







// const checkBalance = prompt("Would you like to see your current balance?");
// function getBal(input){
//     if (input === "yes");{
//         console.log('The current balance is ${balance}');
//     }else if (input === "no");{
//         return menu;
//     }
// }
