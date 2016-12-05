// _||_
// _  _
//  ||

var ttt = {
  player1: {},
  player2: {},
  
  checkWin: function(){
    if(//Horizontal Wins
     this.player1.hasOwnProperty(0) && this.player1.hasOwnProperty(1) && this.player1.hasOwnProperty(2) ||
     this.player1.hasOwnProperty(3) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(5) ||
     this.player1.hasOwnProperty(6) && this.player1.hasOwnProperty(7) && this.player1.hasOwnProperty(8) ||
     //Vertical Wins
     this.player1.hasOwnProperty(0) && this.player1.hasOwnProperty(3) && this.player1.hasOwnProperty(6) ||
     this.player1.hasOwnProperty(1) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(7) ||
     this.player1.hasOwnProperty(2) && this.player1.hasOwnProperty(5) && this.player1.hasOwnProperty(8) ||
     //Diagnol wins
     this.player1.hasOwnProperty(0) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(8) ||
     this.player1.hasOwnProperty(2) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(6)
    )
    
    {
    console.log("Player 1 wins!");
    console.log("Play again!");
    this.player1 = {};
    this.player2 = {};
    }
    else if(//Horizontal Wins
     this.player2.hasOwnProperty(0) && this.player1.hasOwnProperty(1) && this.player1.hasOwnProperty(2) ||
     this.player2.hasOwnProperty(3) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(5) ||
     this.player2.hasOwnProperty(6) && this.player1.hasOwnProperty(7) && this.player1.hasOwnProperty(8) ||
     //Vertical Wins
     this.player2.hasOwnProperty(0) && this.player1.hasOwnProperty(3) && this.player1.hasOwnProperty(6) ||
     this.player2.hasOwnProperty(1) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(7) ||
     this.player2.hasOwnProperty(2) && this.player1.hasOwnProperty(5) && this.player1.hasOwnProperty(8) ||
     //Diagnol wins
     this.player2.hasOwnProperty(0) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(8) ||
     this.player2.hasOwnProperty(2) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(6)
    )
    {
      console.log("Player 2 wins!");
      console.log("Play again!");
      this.player1 = {};
      this.player2 = {};
    }
  },
  
  move: function(player, square){
    if(player === 'player1'){
      this.player1[square] = true;
    }else if(player === 'player2'){
      this.player2[square] = true;
    }else{
      console.log("invalid command");
    }
    this.checkWin();
  }
};
