const state ={
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },
    values: {
        timerId: null,
        gameVelocity: 1000
    },
};

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
        // na lista de class dele, eu vou dar um remove caso
        //ele tenha: enemy
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");

}

//Vai fazer o enemy se mexer
function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}


function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        
    })
}

//Função inicial, vai começar com essa!
function initialize(){
    moveEnemy();
}

initialize();

