let randomNumber = Math.floor(Math.random()*100)
console.log(randomNumber)
let lifesLeft = 10

let input = document.getElementById('num')
let message = document.getElementById('message')
let lifesMessage = document.getElementById('lifes');
let guessButton = document.getElementById('guess');
let playAgainButton = document.getElementById('play-again');
let happyEmoji = document.getElementById('happy-emoji');

function guessNumber(){
    let number = input.value;
    if(number == randomNumber){
        message.innerHTML = 'You guessed it right !!';
        happyEmoji.style.display = 'block';
        input.style.display = 'none';
        guessButton.style.display = 'none';
        lifesMessage.style.display = 'none';
        playAgainButton.style.display = 'block';
    }else if(number < randomNumber){
        message.innerHTML = 'You have entered a lower value';
    }else if(number > randomNumber){
        message.innerHTML = 'You have entered a higher value';
    }

    message.style.display = 'block';

    lifesLeft--;
    lifesMessage.innerHTML = lifesLeft + ' Lifes';
    if(lifesLeft == 0){
        guessButton.disabled = true;
    }
}

function playAgain(){
    input.style.display = 'block';
    guessButton.style.display = 'block';
    lifesMessage.style.display = 'block';
    playAgainButton.style.display = 'none';
    message.style.display = 'none';
    happyEmoji.style.display = 'none';
    lifesLeft = 10;
    lifesMessage.innerHTML = lifesLeft + ' Lifes';
    input.value = '';
}