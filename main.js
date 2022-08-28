const gameBoard = (() => {

    const board = [];

    let selection = "";
    let tiles = document.querySelectorAll(".tile");

    function _getSelection() {
        
        let selections = document.querySelectorAll("button");
        selections.forEach(button => button.addEventListener("click", () => {
        selection = button.id;
        gamePlay.pOne.selection = selection;
        if (selection === "X")
        {
            gamePlay.pTwo.selection = "O";
        }
        else 
        {
            gamePlay.pTwo.selection = "X";
        }
        
        }));    
    }

    function _fillBoardDiv() {
        

        for (let i = 0; i < 9; i++){
            tiles[i].addEventListener("click", () => {
                gamePlay.checkWin(board);

                if(gamePlay.pOne.active){
                    tiles[i].innerHTML = gamePlay.pOne.selection;
                    gamePlay.pOne.active = false;
                }
                else {
                    tiles[i].innerHTML = gamePlay.pTwo.selection;
                    console.log(gamePlay.pTwo.selection);
                    gamePlay.pOne.active = true;
                }
                
                board[i] = tiles[i].innerHTML;
            });
        }
    };

    function _reset() {
        for (let i = 0; i < board.length; i++)
        {
            tiles[i].innerHTML = "";
            board[i] = [];
        }
    }
    
    
    return {
        board,
        
        fillBoardDiv: function() {
            _fillBoardDiv();
        },
        getSelection: function(){
            _getSelection();
        },
        reset: function(){
            _reset();
        },
        selection
    }
    
})();

const player = (selection, active) => {

    selection = gameBoard.selection;
    active = true;

    return {selection, active};   
};



const gamePlay = (() => {
    gameBoard.getSelection();
    let pTwo = player("O", false);
    let pOne = player(gameBoard.selection, true);

    const checkWin = (array) => {
        for(let i = 0; i < array.length; i++)
        {
            if ( pOne.selection === array[i])
            {
                if (array[i] === array[i + 1])
                {
                    console.log("Win!");
                    gameBoard.reset();
                }
            }
        }
    }
    
    return {pOne, pTwo, checkWin};

})();

gameBoard.fillBoardDiv();

