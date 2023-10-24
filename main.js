// Generatore tabelle moltiplicazione

const user = prompt('Insert a number between 1 and 10');
const userNumber = Number(user);
let multiplyVal = 1;
while(multiplyVal<=10){
    let multiplyResult = userNumber*multiplyVal;
    console.log(userNumber + 'x' + multiplyVal + '=' + multiplyResult);
    multiplyVal++;
}

// Sostitutore di parole

let userQuote = prompt('Write a quote');
let originalWord = prompt('Word you want to replace');
let newWord = prompt('New word to use');
userQuote = userQuote.replaceAll(originalWord, newWord);
console.log(userQuote);

// Validatore di siti web

let userUrl = prompt('Type an URL');
let isValidUrl = (userUrl.startsWith('http://') || userUrl.startsWith('https://')) && userUrl.endsWith('.com');
if(!isValidUrl){
    console.log('This is not a valid URL');
}

// Sfida del lancio del dado

let userWin = 0;
let botWin = 0;

do{
    let userRandom = Math.random() * 6;
    let botRandom = Math.random() * 6;
    let userRandomResult = Math.floor(userRandom) + 1;
    let botRandomResult = Math.floor(botRandom) + 1;

    alert("Your result is " + userRandomResult + " the opponent's result is " + botRandomResult);

    if (userRandomResult > botRandomResult) {
        alert("You won!");
        userWin ++;
    } else if (userRandomResult === botRandomResult) {
        alert("You tie!");
    } else {
        alert("You lose!");
        botWin ++;
    }

    alert('User score ' + userWin + ' Bot Score ' + botWin);

    let nextRoundReply = prompt('Play next round?');
    if (nextRoundReply === 'No'){
        break;
    }

}while(true);

// Gioco dell'indovinello

let difficultyChoice = prompt('Choose the highest number to guess');
let difficultyChoiceNumber = Number(difficultyChoice);
let random = Math.random() * difficultyChoiceNumber;
let randomNumber = Math.floor(random) +1;
let guess = prompt('Choose a number from 1 to-' + difficultyChoiceNumber);
let guessNumber = Number(guess);

console.log(randomNumber);

if (guessNumber > randomNumber){
    alert('Too high!');
}else if (guessNumber < randomNumber){
    alert('Too low!');
}else if (guessNumber===randomNumber){
    alert('Congrats! You guessed right!');
}
