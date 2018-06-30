'use strict';

(function(exports){

  function Game(p1 = new Player('O', 1), p2 = new Player('X', -1)){
    this._p1 = p1;
    this._p2 = p2;
    this._count = 1;
    this._currentPlayer = this._p1;
    this._board = [0, 0, 0,
                   0, 0, 0,
                   0, 0, 0];
    this._winSet = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                    [0, 3, 6], [1, 4, 7], [2, 5, 8],
                    [0, 4, 8], [2, 4, 6]];
  };

  Game.prototype = {

    action: function(index){
      if (this._board[index] === 0) {
        this._turn();
        this._board[index] = this._currentPlayer.val;
        this._count++;
      };
    },

    _turn: function(){
      if (this._count % 2 === 0) {
        this._currentPlayer = this._p2;
      } else {
        this._currentPlayer = this._p1;
      };
    },

    checkWinner: function(){
      for (var i = 0; i < 8 ; i++) {
        var set = this._winSet[i];
        var result = 0;
        for(var n = 0; n < 3; n++) {
          result += this._board[set[n]];
          if ( Math.abs(result) === 3 ) {
            return this._currentPlayer.sym + ' WIN!';
          }
        }
      }
    },

    get: function(){
      return {
        player: this._currentPlayer,
        count: this._count,
        board: this._board
      };
    },

    reset: function(){
      this._count = 1;
      this._currentPlayer = this._p1;
      this._board = [0, 0, 0,
                     0, 0, 0,
                     0, 0, 0];
    }

  };

  exports.Game = Game;
})(this);
