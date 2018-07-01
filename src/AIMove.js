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

    var sets = {};

    for (var i = 0; i < 8 ; i++) {
      var set = winset[i];
      var sum = 0;
      for(var n = 0; n < 3; n++) {
        sum += board[set[n]];
      }
      sets[set] = sum;
    };

    var maxSet = Object.keys(sets).reduce(function(a, b){
                  return sets[a] > sets[b] ? a : b
                 }).split(',');

    var minSet = Object.keys(sets).reduce(function(a, b){
                  return sets[a] < sets[b] ? a : b
                 }).split(',');

    var minSum = 0;

    for(var i = 0; i < 3; i++){
      minSum += board[minSet[i]]
    }

    if (minSum === -2){
      for(var i = 0; i < 3; i++){
        if( board[minSet[i]] === 0){
          return minSet[i];
        };
      };
    }else{
      for(var i = 0; i < 3; i++){
        if( board[maxSet[i]] === 0){
          return maxSet[i];
        };
      };
    };
  }

  exports.AIMove = AIMove;
})(this);
