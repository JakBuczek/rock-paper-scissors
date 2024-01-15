function createRandomMove() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) return 'rock';
    else if(randomNumber === 2) return 'paper';
    else if(randomNumber === 3) return 'scissors';

}

function displaymove(playermove, computermove) {
    const playermoveresult = document.querySelector("#playermove");
    const computerMoveresult = document.querySelector("#computermove");
    playermoveresult.innerHTML = playermove;
    computermoveresult.innerHTML = computermove;
}