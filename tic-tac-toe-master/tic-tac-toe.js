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
                gamePieces.push("X");
                
            }
            else if(gamePieces[gamePieces.length - 1] == "X"){

                item.classList.add("O");
                item.textContent = "O";
                gamePieces.push("O");
                
            }
        });
    }

}






