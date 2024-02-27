const state ={
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        life: document.querySelector("#life"),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
        InitialLife: 3,
    },
    actions:{
        timerId: null,//O timer add eu fiz uma função para isso, diferente do countDownTimerId
        countDownTimerId:setInterval(countDown, 1000), //Aqui eu passei uma função direto na declaração
    },
};
//Fiz assim de primeira:
// function playSound(){
//     let audio = new Audio("./src/audios/hit.m4a");
//     audio.volume = 0.2;
//     audio.play();
// }   

function playSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.2;
    audio.play();
}  

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
    state.actions.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if(state.values.curretTime <= 0){
        clearInterval(state.actions.countDownTimerId);//vai limpar os intervalos da memoria
        clearInterval(state.actions.timerId);
        alert("Time is over! O seu resultado foi: "+ state.values.result);
    }
}
//Melhorar essa parte, deixar mais generico
function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                // playSound();
                playSound("hit"); //Passei como parametro o primeiro nome do som
            }else{
                
                state.values.InitialLife--;
                state.view.life.textContent = state.values.InitialLife;
                if(state.values.InitialLife <= 0){
                    clearInterval(state.actions.countDownTimerId);//vai limpar os intervalos da memoria
                    clearInterval(state.actions.timerId);
                    clearInterval(state.values.InitialLife);
                    alert("Time is over! O seu resultado foi: "+ state.values.result);
                }
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

