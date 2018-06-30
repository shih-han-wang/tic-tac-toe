$(document).ready(function(){

  var game = new Game();

  $(".cell").click(function(){

    game.action($(this).attr("id"));
    $(this).text(game.get().player.sym)

    if (game.get().count >= 5){
      if ( game.checkWinner() != undefined ){
        setTimeout(function(){
          $(".winner").css({'display' : 'block'});
          $("#winnerMessage").text(game.checkWinner());
        }, 200);
      };
    };

  });

  $("#reset").click(function(){
    resetGameAndDisplay()
  });

  $("#again").click(function(){
    resetGameAndDisplay()
    $(".winner").css({'display' : 'none'});
  });

  function resetGameAndDisplay(){
    game.reset();
    $(".cell").text('')
  }

});
