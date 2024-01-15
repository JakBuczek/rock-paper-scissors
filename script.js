const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function() {
    const randomMove = createRandomMove();
    displaymove(this.id, randomMove);
})

paper.addEventListener("click", function() {
    const randomMove = createRandomMove();
    displaymove(this.id, randomMove);
})

scissors.addEventListener("click", function() {
    const randomMove = createRandomMove();
    displaymove(this.id, randomMove);
})
