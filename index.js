const prompt = require('prompt-sync')();

    const ROWs = 5;
    const COLS = 5;
    const SYMBOLS_COUNT ={
        A:2,
        B:4,
        C:6,
        D:8,
        E:10
    }

    const SYMBOLS_VALUE ={
        A:5,
        B:4,
        C:3,
        D:2,
        E:1
    }

const deposit = () => {
    while(true){

    const depositAmount = prompt('Enter deposit amount: ');

    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log('Invalid deposit amount, try again');
    } else {
        return numberDepositAmount;
    }
}
    
};

const getNumberOfLines = () => {
    while(true){

        const lines = prompt('Enter the number of lines to bet on (1-5): ');
    
        const numberOfLines= parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 5){
            console.log('Invalid number of lines, try again');
        } else {
            return numberOfLines;
        }
    }

}
const getBet = (balance, lines) =>{
    while(true){

        const bet = prompt('Enter the number of total bet: ');
    
        const numberBet= parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
            console.log('Invalid bet, try again');
        } else {
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for ( const [symbol, count ] of Object.entries(SYMBOLS_COUNT) ){
        console.log(symbol, count);
    }
};
spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
