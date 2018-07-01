'use strict';

(function(exports){

  function AIFirstMove(board){
    if(board[4] === 0){
      return 4;
    }else{
      var move = [0, 8];
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
      for(var s = 0; s < 3; s++) {
        sum += board[set[s]];
      }
      sets[set] = sum;
    }

    var maxSet = Object.keys(sets).reduce(function(a, b){
                  return sets[a] > sets[b] ? a : b;
                 }).split(',');

    var minSet = Object.keys(sets).reduce(function(a, b){
                  return sets[a] < sets[b] ? a : b;
                 }).split(',');

    var minSum = 0;

    for(var m = 0; m < 3; m++){
      minSum += board[minSet[m]];
    }

    if (minSum === -2){
      for(var n = 0; n < 3; n++){
        if( board[minSet[n]] === 0){
          return minSet[n];
        }
      }
    }else{
      for(var x = 0; x < 3; x++){
        if( board[maxSet[x]] === 0){
          return maxSet[x];
        }
      }
    }
  }

  exports.AIMove = AIMove;
})(this);
