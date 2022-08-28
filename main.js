const gameBoard = (() => {

    const board = [];

    let selection = "";

    function _getSelection() {
        
        let selections = document.querySelectorAll("button");
        selections.forEach(button => button.addEventListener("click", () => {
        selection = button.id;
        gamePlay.pOne.selection = selection;
        gamePlay.pTwo.selection = "X";
        }));    
    }

    function _fillBoardDiv() {
        let tiles = document.querySelectorAll(".tile");

        for (let i = 0; i < 9; i++){
            tiles[i].addEventListener("click", () => {
                
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
    
    
    return {
        board,
        
        fillBoardDiv: function() {
            _fillBoardDiv();
        },
        getSelection: function(){
            _getSelection();
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

    if(pOne.selection === "X")
    {
        pTwo = player("O", false);
    }
    else 
    {
        pTwo = player("X", false);
    }
    
    return {pOne, pTwo};

})();



gameBoard.fillBoardDiv();

