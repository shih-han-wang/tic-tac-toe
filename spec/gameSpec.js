'use strict';

describe('Game', function() {

  var game;

  beforeEach( function() {
    game = new Game();
  })

  describe('initial array', function() {
     it('return array with values 0', function() {
       expect(game._array).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
  });


});
