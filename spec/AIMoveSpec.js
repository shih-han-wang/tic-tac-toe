'use strict';

describe('AIMove', function() {

  var board1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var board2 = [0, 0, 0, 0, 1, 0, 0, 0, 0];

  describe('first move', function() {

    it('return 4 when board index 4 equal 0', function() {
       expect(AIFirstMove(board1)).toEqual(4);
    });

    it('return 0 or 2 or 6 or 8 when board index 4 not 0', function() {
      var move = AIFirstMove(board2);
      var possibleMove = [0, 2, 6, 8];
       expect(possibleMove.indexOf(move) !== -1 ).toBe(true);
    });
  });

});
