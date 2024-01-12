const prompt = require('prompt-sync')();

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

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
