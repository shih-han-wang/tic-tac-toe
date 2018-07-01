$(document).ready(function(){

  game = new Game();

  // 2 players mode

  $("#TwoPMode").click(function(){

    $(".winner").css({'display' : 'none'});

    $(".cell").click(function(){

      var color = game.get().count % 2 === 1 ? '#b3c3e4' : '#b3e4d4';

      if( game.action($(this).attr("id")) ){
        $(this).text(game.get().player.sym);
        $(this).css({'background-color' : color });
      };

      if (game.get().count >= 5){
        checkWinnerReturnMessage();
      };

      if( game.get().count === 10  && game.checkWinner() === undefined ){
        setTimeout(function(){
          tieMessage();
        }, 200);
      };

    });

  });

  // player vs computer mode

  $("#AIMode").click(function(){

    $(".winner").css({'display' : 'none'});

    $(".cell").click(function(){

      game.action($(this).attr("id"));
      $(this).text(game.get().player.sym);

      if(game.get().count === 2){
        var ai = AIFirstMove(game.get().board)
      }else{
        var ai = AIMove(game.get().board, game.get().winSet)
      }

      game.action(ai);

      setTimeout(function(){
        $(`#${ai}`).text(game.get().player.sym);
      }, 300);

      if (game.get().count >= 5){
        checkWinnerReturnMessage()
      };

    });

  });

  $("#reset").click(function(){
    resetGameAndDisplay()
  });

  $("#again").click(function(){
    location.reload();
  });

  function resetGameAndDisplay(){
    game.reset();
    $(".cell").text('')
  };

  function checkWinnerReturnMessage(){
    if ( game.checkWinner() != undefined ){
      setTimeout(function(){
        winnerMessageBoard();
        $("#winnerMessage").text(game.checkWinner());
      }, 200);
    };
  };

  function tieMessage(){
    winnerMessageBoard();
    $("#winnerMessage").text("It's a tie!");
  };

  function winnerMessageBoard(){
    $(".winner").css({'display' : 'block'});
    $("#TwoPMode").css({'display' : 'none'});
    $("#AIMode").css({'display' : 'none'});
    $("#again").css({'display' : 'inline'});
  };

});
