'use strict';

(function(exports){

  function Game(p1 = new Player('O', 1), p2 = new Player('X', -1)){
    this._p1 = p1;
    this._p2 = p2;
    this._currentPlayer = this._p1;
    this._array = [0, 0, 0,
                   0, 0, 0,
                   0, 0, 0];
  };

  Game.prototype = {

    action: function(index){
      this._array[index] = this._currentPlayer.val;
    }

  }

  exports.Game = Game;
})(this);
