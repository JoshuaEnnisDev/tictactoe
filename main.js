const gameBoard = (() => {

    const board = [];

    function _fillBoardDiv() {

        let tiles = document.querySelectorAll(".tile");
        let me = player(player.selection);
        for (let i = 0; i < 9; i++){
            tiles[i].addEventListener("click", () => {
                
                tiles[i].innerHTML = me.selection;

                board[i] = tiles[i].innerHTML;
            });
        }
    };
    const getSelection = (selection) => {
        let selections = document.querySelectorAll("button");
        selections.forEach(button => button.addEventListener("click", () => {
        selection = 'x';
        
        }));    
    }
    
    return {
        board,
        
        fillBoardDiv: function() {
            _fillBoardDiv();
        },
        getSelection
    }
    
})();

const player = () => {

    const selection = gameBoard.selection
    return {selection};
       
};

let pOne = player.selection;
gameBoard.fillBoardDiv();

