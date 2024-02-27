const state ={
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
    },
};

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
        // na lista de class dele, eu vou dar um remove caso
        //ele tenha: enemy
    });

    let randomNumber = Math.floor(Math.random()*9); //0(inclusive)-9(exclusivo)
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

//Vai fazer o enemy se mexer
function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}


function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            }
        });
    });
}

//Função inicial, vai começar com essa!
function initialize(){
    moveEnemy();
    addListenerHitBox();
}

initialize();

