const atm = require("./atm"); 
const prompt = require("prompt-sync")({sigint: true});

// function run(){
//     atm.newBal();
//     atm.pinChecker();
//     atm.atmwithdraw();
//     atm.atmdeposit();
//     }
// run();
const checkPin = prompt("What is your pin?")
const userInput = prompt();
if(!atm.pinChecker === userInput) {
    console.log('Incorrect. try again please.');
}else{
    const mainMenu = prompt("Please choose from the following '1' for balance. '2' for a deposit. '3' for a withdrawal. You can type 'quit' when finished.");
    switch(mainMenu) {
        case "1":
            console.log(`your current balance is: ${atm.newBal}`);
            break;
        case "2":
            let userdeposit = prompt('what is the amount you would like to deposit.')
            console.log(atm.newBal);
        case "3":
            let userwithdraw = prompt('how much would you like to take out?')
            console.log(atm.newBal);
        case "exit":

        break;
    }
    const reStart = prompt("Would you like to go back through your options? If so please enter yes. If you would like to quit, please enter no.")
const uInput = prompt();
if(uInput === "yes"){
    return mainMenu;
}else if(uInput === "no"){
    console.log("Have a nice day.");
}
}


