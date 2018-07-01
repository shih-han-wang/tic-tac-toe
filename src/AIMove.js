'use strict';

(function(exports){

  function AIFirstMove(board){
    if(board[4] === 0){
      return 4;
    }else{
      var move = [0, 8]
      return move[Math.floor(Math.random()*move.length)];
    }
  }

  exports.AIFirstMove = AIFirstMove;
})(this);

(function(exports){

  function AIMove(board, winset){

    var setsHash = {};

    for (var i = 0; i < 8 ; i++) {
      var set = winset[i];
      var sum = 0;
      for(var n = 0; n < 3; n++) {
        sum += board[set[n]];
      }
      setsHash[set] = sum;
    }

    var max = Object.keys(setsHash).reduce(function(a, b){ return setsHash[a] > setsHash[b] ? a : b }).split(',');

    var min = Object.keys(setsHash).reduce(function(a, b){ return setsHash[a] < setsHash[b] ? a : b }).split(',');

    var minSum = 0;

    for(var i = 0; i < 3; i++){
      minSum += board[min[i]]
    }

    if (minSum === -2){
      for(var i = 0; i < 3; i++){
        if( board[min[i]] === 0){
          return min[i];
        };
      };
    }else{
      for(var i = 0; i < 3; i++){
        if( board[max[i]] === 0){
          return max[i];
        };
      };
    };
  }

  exports.AIMove = AIMove;

})(this);
