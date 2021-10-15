const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


let getInput = (currentSum) => {
    readline.question('Enter a number : ', inputNumber => {

        currentSum = currentSum == undefined ? 0 : currentSum;
        if (inputNumber === 'stop') {
            readline.close();
            console.log("Sum of all the numbers = " + currentSum);
            return;
        }
        currentSum += parseInt(inputNumber);
        getInput(currentSum);
    })

};
getInput();