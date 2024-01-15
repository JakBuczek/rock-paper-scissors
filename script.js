const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function(){
    console.log(this.id)
})

paper.addEventListener("click", function(){
    console.log(this.id)
})

scissors.addEventListener("click", function(){
    console.log(this.id)
})
