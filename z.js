let turn = "X";
let turntext = document.getElementById("turn-text");
let boxes = document.getElementsByClassName('box')
let gameover = false;
let giffy=document.getElementById("giffy");

// Function to change turn
const changeTurn = () => {
    if (turn == "X") {
        turn = "O";
        return turn;
        // turntext.innerText = turn;
    }
    else if (turn == "O") {
        turn = "X";
        return turn;
        // turntext.innerText = turn;
    }
};

// Function to check win
const checkWin = (x) => {
    let wins = [
        [0, 1, 2,1,5.7,0],
        [3, 4, 5,1,18,0],
        [6, 7, 8,1,30,0],
        [0, 3, 6,16,11,90],
        [1, 4, 7,16,-1,90],
        [2, 5, 8,16,-13,90],
        [0, 4, 8,13,12,45],
        [2, 4, 6,11,-13,135],
    ]

    wins.forEach((e) => {
        if ((boxes[e[0]].innerHTML == boxes[e[1]].innerHTML) && (boxes[e[1]].innerHTML == boxes[e[2]].innerHTML) && boxes[e[0]].innerHTML != "") {
            document.querySelector("#turn").innerHTML = boxes[e[0]].innerHTML + " WON";
            // document.querySelector("#line").style.transform="translate(e[3]vw,e[4]vw)"
            document.querySelector("#line").style.width="30vw";
            document.querySelector("#line").style.visibility="visible";
            
            
            
            document.querySelector("#line").style.transform = `translate(${e[3]}vw, ${e[4]}vw)`;
            document.querySelector("#line").style.rotate=(e[5]+"deg");
            

            gameover = true;
            giffy.style.width="30vw"
        }
    })
};




document.getElementById("reset").addEventListener("click",()=>{
    Array.from(boxes).forEach((box) => {
        if(gameover==true){
            giffy.style.width=0;            
        }
        
        box.innerText = "";
        document.getElementById("turn").innerHTML="TURN FOR <span id='turn-text'><\span>"
        let turntext = document.getElementById("turn-text");
        turn = "X";
        turntext.innerText = turn;
        document.querySelector("#line").style.visibility="hidden";
           gameover=false;
    })
})


Array.from(boxes).forEach((box) => {
    
    box.addEventListener("click", () => {
        if (box.innerText == "") {
            if (gameover != true) {
                box.innerText = turn;
                changeTurn();
                checkWin();
                checkTie();
                document.getElementById("turn-text").innerText=turn;
                
                
            }
            else{
                alert("GAMEOVER");
                
            }
              
            
        }



    })
})



