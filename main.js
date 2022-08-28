const gameBoard = (() => {

    const board = [];

    let selection = "";

    function _getSelection() {
        
        let selections = document.querySelectorAll("button");
        selections.forEach(button => button.addEventListener("click", () => {
        selection = button.id;
        console.log(selection);
        gamePlay.pOne.selection = selection;
        
        }));    
    }

    function _fillBoardDiv() {
        let tiles = document.querySelectorAll(".tile");

        for (let i = 0; i < 9; i++){
            tiles[i].addEventListener("click", () => {
                
                if(gamePlay.pOne.active){
                    tiles[i].innerHTML = gamePlay.pOne.selection;
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
    let pTwo = "";
    gameBoard.getSelection();
    let pOne = player(gameBoard.selection); 

    return {pOne};

})();



gameBoard.fillBoardDiv();

