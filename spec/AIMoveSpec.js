'use strict';

describe('AI', function() {

  var initBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var returnRandomBoard = [0, 0, 0, 0, 1, 0, 0, 0, 0];

  var winSet = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                  [0, 3, 6], [1, 4, 7], [2, 5, 8],
                  [0, 4, 8], [2, 4, 6]];

  // expect return 0
  var stopUserWinBoard1 = [ 0, 0, -1,
                            0, 1, 0,
                            0, 0, 1];
  // expect return 8
  var stopUserWinBoard2 = [0, 0, 0,
                           0, -1, 0,
                           1, 1, 0];
  // expect return 1
  var stopUserWinBoard3 = [0, 0, 1,
                           0, 1, 0,
                           -1, 1, -1];
  // expect return 6
  var AIwinBoard1 = [1, 1, -1,
                    1, -1, 0,
                    0, 0, 0];
  // expect return 5
  var AIwinBoard2 = [1, 0, -1,
                     0, 1, 0,
                     1, 0, -1];

  describe('first move', function() {

    it('return 4 when board index 4 equal 0', function() {
       expect(AIFirstMove(initBoard)).toEqual(4);
    });

    it('return 0 or 2 or 6 or 8 when board index 4 not 0', function() {
      var move = AIFirstMove(returnRandomBoard);
      var possibleMove = [0, 8];
       expect(possibleMove.indexOf(move) !== -1 ).toBe(true);
    });
  });

  describe('after first move', function() {

    it('return 0 to stop user win', function() {
       expect(AIMove(stopUserWinBoard1, winSet)).toEqual('0');
    });

    it('return 8 to stop user win', function() {
       expect(AIMove(stopUserWinBoard2, winSet)).toEqual('8');
    });

    it('return 1 to stop user win', function() {
       expect(AIMove(stopUserWinBoard3, winSet)).toEqual('1');
    });

    it('return 6 to win', function() {
       expect(AIMove(AIwinBoard1, winSet)).toEqual('6');
    });

    it('return 5 to win', function() {
       expect(AIMove(AIwinBoard2, winSet)).toEqual('5');
    });

  });

});
