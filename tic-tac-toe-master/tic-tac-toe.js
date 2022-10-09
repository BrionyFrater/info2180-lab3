window.onload = function(){

    let gamePieces = [""];
    let squareDivs = document.getElementById("board").querySelectorAll("div");

    
    for(const item of squareDivs){
        item.className = "square";
    }

    for(const item of squareDivs){
        item.addEventListener("click", function(){

            if(gamePieces[gamePieces.length - 1] == "O" || gamePieces[gamePieces.length - 1] == ""){

                item.classList.add("X");
                item.textContent = "X";
                item.style.pointerEvents = "none";
                gamePieces.push("X");
                
            }
            else if(gamePieces[gamePieces.length - 1] == "X"){

                item.classList.add("O");
                item.textContent = "O";
                item.style.pointerEvents = "none";
                gamePieces.push("O");

            }

            if((squareDivs[0].textContent == "X" && squareDivs[1].textContent == "X" && squareDivs[2].textContent == "X") //row conditions
                || (squareDivs[3].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[5].textContent == "X")
                || (squareDivs[6].textContent == "X" && squareDivs[7].textContent == "X" && squareDivs[8].textContent == "X")
                || (squareDivs[0].textContent == "X" && squareDivs[3].textContent == "X" && squareDivs[6].textContent == "X")//col conditions
                || (squareDivs[1].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[7].textContent == "X")
                || (squareDivs[2].textContent == "X" && squareDivs[5].textContent == "X" && squareDivs[8].textContent == "X")
                || (squareDivs[0].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[8].textContent == "X")//diag conditions
                || (squareDivs[2].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[6].textContent == "X")
                
               ){

                    console.log("x won");
                    document.getElementById("board").style.pointerEvents = "none";
                    document.getElementById("status").classList.add("you-won");
                    document.getElementById("status").textContent = "Congratulations! X is the Winner!";
            }
            else if((squareDivs[0].textContent == "O" && squareDivs[1].textContent == "O" && squareDivs[2].textContent == "O") //row conditions
                    || (squareDivs[3].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[5].textContent == "O")
                    || (squareDivs[6].textContent == "O" && squareDivs[7].textContent == "O" && squareDivs[8].textContent == "O")
                    || (squareDivs[0].textContent == "O" && squareDivs[3].textContent == "O" && squareDivs[6].textContent == "O")//col conditions
                    || (squareDivs[1].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[7].textContent == "O")
                    || (squareDivs[2].textContent == "O" && squareDivs[5].textContent == "O" && squareDivs[8].textContent == "O")
                    || (squareDivs[0].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[8].textContent == "O")//diag conditions
                    || (squareDivs[2].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[6].textContent == "O")
            
                    ){

                    console.log("O won");
                    document.getElementById("board").style.pointerEvents = "none";
                    document.getElementById("status").classList.add("you-won");
                    document.getElementById("status").textContent = "Congratulations! O is the Winner!";
            }
        
        });

        item.addEventListener("mouseenter", function(){

            item.classList.add("hover");

        });

        item.addEventListener("mouseleave", function(){

            item.classList.remove("hover");

        });

    }

    document.getElementsByClassName("btn")[0].addEventListener("click", function(){
        document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");

        document.getElementById("board").style.pointerEvents = "all";
        
        gamePieces = [""];

        for(const item of squareDivs){
            item.textContent = "";
            item.style.pointerEvents = "inherit";
            item.classList.remove("X");
            item.classList.remove("O");
        }

    });

}






