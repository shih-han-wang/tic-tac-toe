'use strict';

describe('Player', function() {

  var player;

  beforeEach( function() {
    player = new Player('O', 1);
  })

  describe('initialize', function() {
    it('symbol', function() {
       expect(player.sym).toEqual('O');
    });

    it('value', function() {
       expect(player.val).toEqual(1);
    });
  });


});
