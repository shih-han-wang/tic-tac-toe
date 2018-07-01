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

  describe('get', function() {
    it('return board with values 0', function() {
       expect(game.get().board).toEqual([0, 0, 0,
                                    0, 0, 0,
                                    0, 0, 0]);
    });

    it('return current player', function() {
       expect(game.get().player).toEqual(game._p1);
    });

    it('return count', function() {
       expect(game.get().count).toEqual(1);
    });

    it('return winset', function() {
       expect(game._winSet).toEqual([[0, 1, 2],  [6, 7, 8], [0, 3, 6],  [2, 5, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]]);
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
      expect(game._board).toEqual([0, 0, 0,
                                    0, 1, 0,
                                    0, 0, 0]);
    });

    it('count plus one', function() {
      game.action(4)
      expect(game._count).toEqual(2);
    });

    it('second action change player', function() {
      game.action(4)
      game.action(6)
      expect(game._board).toEqual([0, 0, 0,
                                    0, 1, 0,
                                    -1, 0, 0]);
    });

    it('same index only can be chosen once', function() {
      game.action(3)
      game.action(3)
      expect(game._count).toEqual(2);
      expect(game._board).toEqual([0, 0, 0,
                                    1, 0, 0,
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

  describe('checkwinner', function() {
    it('return the winner - first test', function() {
      game.action(0);
      game.action(3);
      game.action(1);
      game.action(4);
      game.action(2);
      expect(game.checkWinner()).toEqual('O WINS!');
    });

    it('return the winner - second test', function() {
      game.action(1);
      game.action(4);
      game.action(0);
      game.action(2);
      game.action(3);
      game.action(6);
      expect(game.checkWinner()).toEqual('X WINS!');
    });
  });

  describe('reset', function() {
    it('reset everything', function() {
      game.action(0);
      game.action(3);
      game.action(2);
      game.reset()
      expect(game.get().board).toEqual([0, 0, 0,
                                        0, 0, 0,
                                        0, 0, 0]);
      expect(game.get().player).toEqual(game._p1);
      expect(game.get().count).toEqual(1);
    });
  });

});
