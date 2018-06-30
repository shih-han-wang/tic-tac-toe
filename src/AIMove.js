'use strict';

(function(exports){

  function AIFirstMove(board){
    if(board[4] === 0){
      return 4;
    }else{
      var move = [0, 2, 6, 8]
      return move[Math.floor(Math.random()*move.length)];
    }
  }

  exports.AIFirstMove = AIFirstMove;
})(this);
