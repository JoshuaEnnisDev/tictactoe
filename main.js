const gameBoard = (() => {

    const board = [];

    function _fillBoardArray() {
        
        for (let i = 0; i < 9; i++)
        {
            board.push("x");
        }
    }

    function _displayMarker(node, array)
    {
        node.innerHTML = array;
    }

    function _fillBoardDiv() {
        _fillBoardArray();
        let tiles = document.querySelectorAll(".tile");
        
        for (let i = 0; i < board.length; i++){
            tiles[i].addEventListener("click", () => {
                console.log(board[i]);
                tiles[i].innerHTML = board[i];
                
            });
        }
    };
    
    return {
        
        fillBoardDiv: function() {
            _fillBoardDiv();
        }
    }
    
})();



let gamePlay = (() => {
    const turn = (player) => {

    }

})();

gameBoard.fillBoardDiv();