'use strict';

describe('Game', function() {

  var game;
  var player1;
  var player2;

  beforeEach( function() {
    player1 = {
      sym: 'O',
      val: 1
    };
    player2 = {
      sym: 'X',
      val: -1
    }
    game = new Game(player1, player2);
  })

  describe('initial array', function() {
     it('return array with values 0', function() {
       expect(game._array).toEqual([0, 0, 0,
                                    0, 0, 0,
                                    0, 0, 0]);
    });
  });

  describe('players', function() {
    it('return p1 sym', function() {
       expect(game._p1.sym).toEqual('O');
    });

    it('return p1 value', function() {
       expect(game._p1.val).toEqual(1);
    });

    it('return p2 sym', function() {
       expect(game._p2.sym).toEqual('X');
    });

    it('return p2 value', function() {
       expect(game._p2.val).toEqual(-1);
    });
  });

  describe('action', function() {
    it('change the array with val at given index', function() {
      game.action(4)
      expect(game._array).toEqual([0, 0, 0,
                                    0, 1, 0,
                                    0, 0, 0]);
    });

  });

  describe('_turn', function() {
    it('change the currentPlayer', function() {
      game._count = 2;
      game._turn();
      expect(game._currentPlayer).toBe(game._p2);
    });
  });


});
