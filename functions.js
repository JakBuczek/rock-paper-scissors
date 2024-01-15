function createRandomMove() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) return 'rock';
    else if(randomNumber === 2) return 'paper';
    else if(randomNumber === 3) return 'scissors';

}

function displaymove(playermove, computermove) {
    const playermoveresult = document.querySelector("#playermove");
    const computermoveresult = document.querySelector("#computermove");
    playermoveresult.innerHTML = playermove;
    computermoveresult.innerHTML = computermove;
}

function displayresult(playermove, computermove) {
    const resultdisplay = document.querySelector("#result");

    if(playermove === computermove) resultdisplay.innerHTML = 'Draw.';
    else if(playermove === "paper" 
            && computermove === "scissors") resultdisplay.innerHTML = 'You lost.';
    else if(playermove === "rock" 
            && computermove === "paper") resultdisplay.innerHTML = 'You lost.';
    else if(playermove === "scissors" 
            && computermove === "rock") resultdisplay.innerHTML = 'You lost.';
    else resultdisplay.innerHTML = "You Won."
}