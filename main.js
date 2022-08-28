const gameBoard = (() => {

    const board = [];

    let selection = "";

    function _getSelection() {
        let selections = document.querySelectorAll("button");
        selections.forEach(button => button.addEventListener("click", () => {
        selection = button.id;
        console.log(selection);
        
        }));    
    }

    function _fillBoardDiv() {
        let tiles = document.querySelectorAll(".tile");
        
        for (let i = 0; i < 9; i++){
            tiles[i].addEventListener("click", () => {
                
                tiles[i].innerHTML = selection;

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

const player = () => {

    const selection = gameBoard.selection
    return {selection};
       
};
gameBoard.getSelection();
gameBoard.fillBoardDiv();

