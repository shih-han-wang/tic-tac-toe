'use strict';

(function(exports){

  function Game(p1 = new Player('O', 1), p2 = new Player('X', -1)){
    this.p1 = p1;
    this.p2 = p2;
    this._array = [0, 0, 0,
                   0, 0, 0,
                   0, 0, 0];
  };

  exports.Game = Game;
})(this);
