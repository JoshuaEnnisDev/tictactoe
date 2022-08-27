const gameBoard = (() => {

    const board = [];

    const selection = () =>{
    
        let selections = document.querySelectorAll("button");
        selections.forEach(button => button.addEventListener("click", () => {
        selection = button.id;
        console.log(selection);
        }));    
    };

    const getSelection = () => selection;

    function _fillBoardDiv() {

        let tiles = document.querySelectorAll(".tile");
        
        for (let i = 0; i < 9; i++){
            tiles[i].addEventListener("click", () => {
                
                tiles[i].innerHTML = me.selection;
                board[i] = tiles[i].innerHTML;
            });
        }
    };
    
    return {
        board,
        
        fillBoardDiv: function() {
            _fillBoardDiv();
        },
        getSelection
        
    }
    
})();

const player = (selection, first) => {
    
    return {
        selection,
        first
    }
}

    



let gamePlay = (() => {
    
})();

let me = player(gameBoard.selection, true);
gameBoard.fillBoardDiv();
