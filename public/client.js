// _||_
// _  _
//  ||

function checkWin(){
  if(//Horizontal Wins
     player1.hasOwnProperty(0) && player1.hasOwnProperty(1) && player1.hasOwnProperty(2) ||
     player1.hasOwnProperty(3) && player1.hasOwnProperty(4) && player1.hasOwnProperty(5) ||
     player1.hasOwnProperty(6) && player1.hasOwnProperty(7) && player1.hasOwnProperty(8) ||
     //Vertical Wins
     player1.hasOwnProperty(0) && player1.hasOwnProperty(3) && player1.hasOwnProperty(6) ||
     player1.hasOwnProperty(1) && player1.hasOwnProperty(4) && player1.hasOwnProperty(7) ||
     player1.hasOwnProperty(2) && player1.hasOwnProperty(5) && player1.hasOwnProperty(8) ||
     //Diagnol wins
     player1.hasOwnProperty(0) && player1.hasOwnProperty(4) && player1.hasOwnProperty(8) ||
     player1.hasOwnProperty(2) && player1.hasOwnProperty(4) && player1.hasOwnProperty(6)
    )
    
    {
    console.log("Player 1 wins!");
    console.log("Play again!")
    
    }
    else if(//Horizontal Wins
     player2.hasOwnProperty(0) && player1.hasOwnProperty(1) && player1.hasOwnProperty(2) ||
     player2.hasOwnProperty(3) && player1.hasOwnProperty(4) && player1.hasOwnProperty(5) ||
     player2.hasOwnProperty(6) && player1.hasOwnProperty(7) && player1.hasOwnProperty(8) ||
     //Vertical Wins
     player2.hasOwnProperty(0) && player1.hasOwnProperty(3) && player1.hasOwnProperty(6) ||
     player2.hasOwnProperty(1) && player1.hasOwnProperty(4) && player1.hasOwnProperty(7) ||
     player2.hasOwnProperty(2) && player1.hasOwnProperty(5) && player1.hasOwnProperty(8) ||
     //Diagnol wins
     player2.hasOwnProperty(0) && player1.hasOwnProperty(4) && player1.hasOwnProperty(8) ||
     player2.hasOwnProperty(2) && player1.hasOwnProperty(4) && player1.hasOwnProperty(6)
    )
    {
      console.log("Player 2 wins!");
      console.log("Play again!")
    }
}

var player1 = {};
var player2 = {};

function move(player, square){
  player[square] = true;
  checkWin();
}
