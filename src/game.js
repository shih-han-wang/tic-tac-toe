'use strict';

(function(exports){

  function Game(p1 = new Player('O', 1), p2 = new Player('X', -1)){
    this._p1 = p1;
    this._p2 = p2;
    this._count = 1;
    this._currentPlayer = this._p1;
    this._array = [0, 0, 0,
                   0, 0, 0,
                   0, 0, 0];
  };

  Game.prototype = {

    action: function(index){
      if (this._array[index] === 0) {
        this._turn();
        this._array[index] = this._currentPlayer.val;
        this._count++;
      };
    },

    _turn: function(){
      if (this._count % 2 === 0) {
        this._currentPlayer = this._p2;
      } else {
        this._currentPlayer = this._p1;
      };
    }


  }

  exports.Game = Game;
})(this);
