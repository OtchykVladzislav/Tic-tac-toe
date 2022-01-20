var game = document.getElementById("game")
var goo = 0;
for(let i = 0; i < 9; i++){
    game.innerHTML += '<div class="block"></div>';
}
var allblock = document.getElementsByClassName("block");

function Move(){
    var index = [];
    var j = 0;
    for(let i = 0; i < allblock.length; i++){
        if(allblock[i].innerHTML == ""){
            index[j] = i;
            j++;
        }
    }
    return index;
}

function NPS() {
    var index = Move();
    var random = Math.floor(Math.random() * index.length);
    var randBlock = index[random];
    allblock[randBlock].innerHTML = "O";
    goo = 0;
    GG();
}

function Restart() {
    count = 0;
    goo = 0;
    game.innerHTML = "";
    for(let i = 0; i < 9; i++){
        game.innerHTML += '<div class="block"></div>';
    }
}

function GG() {
    var rez = Check();
    var index = Move();
    if (rez){
        switch(rez){
            case 1:
                goo = 1;
                game.innerHTML = "Победили крестики!";
                break;
            case 2: 
                goo = 1;
                game.innerHTML = "Победили нолики!";
                break;
        }
    }
    else{
        if(index.length == 0){
            goo = 1;
            game.innerHTML = "Ничья!";
        }
    }
    if (rez || index.length == 0){
        setTimeout(Restart, 3000);
        return true;
    }
    return false;
}

function Check(){
    var combo = [[0, 1, 2], 
                [3, 4, 5], 
                [6, 7, 8], 
                [0, 3, 6], 
                [1, 4, 7], 
                [2, 5, 8], 
                [0, 4, 8], 
                [2, 4, 6]];
    for (let i = 0; i < combo.length; i++){
        if(allblock[combo[i][0]].innerHTML == "X" && allblock[combo[i][1]].innerHTML == "X" && allblock[combo[i][2]].innerHTML == "X"){return 1;}
        if(allblock[combo[i][0]].innerHTML == "O" && allblock[combo[i][1]].innerHTML == "O" && allblock[combo[i][2]].innerHTML == "O"){return 2;}
    }
}

game.onclick = function(e) {
    if (goo == 0) {
        if (e.target.innerHTML == "") {
            e.target.innerHTML = "X";
            goo = 1;
            if (!GG()) {
               setTimeout(NPS, 1000);
            }
        }
    }
}

function Switch(){
    alert("Скоро")
}