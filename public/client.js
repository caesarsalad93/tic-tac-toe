// _||_
// _  _
//  ||

var ttt = {
  player1: {},
  player2: {},
  
  symbol1: "X",
  symbol2: "O",
  
  currentTurn: "X",
  changeTurn: function(){
    this.currentTurn =  this.currentTurn === this.symbol1 ? this.symbol2 : this.symbol1;
  },
  

  
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
    alert('Player 1 wins!');
    }
    else if(//Horizontal Wins
     this.player2.hasOwnProperty(0) && this.player2.hasOwnProperty(1) && this.player2.hasOwnProperty(2) ||
     this.player2.hasOwnProperty(3) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(5) ||
     this.player2.hasOwnProperty(6) && this.player2.hasOwnProperty(7) && this.player2.hasOwnProperty(8) ||
     //Vertical Wins
     this.player2.hasOwnProperty(0) && this.player2.hasOwnProperty(3) && this.player2.hasOwnProperty(6) ||
     this.player2.hasOwnProperty(1) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(7) ||
     this.player2.hasOwnProperty(2) && this.player2.hasOwnProperty(5) && this.player2.hasOwnProperty(8) ||
     //Diagnol wins
     this.player2.hasOwnProperty(0) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(8) ||
     this.player2.hasOwnProperty(2) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(6)
    )
    {
      console.log("Player 2 wins!");
      console.log("Play again!");
      this.player1 = {};
      this.player2 = {};
      alert('Player 2 wins!');
    }
  },
  
  move: function(player, square) {
    if(player === this.symbol1){
      ttt.player1[square] = true;
    }else if(player === this.symbol2){
      ttt.player2[square] = true;
    }
    this.checkWin();
  },
  
  fillSquare: function() {
    var sqNum = parseInt(event.target.id);
    var sqTarget = event.target;
    if(sqTarget.innerHTML === '_'){
      sqTarget.innerHTML = ttt.currentTurn;
      this.move(this.currentTurn, sqNum);
      this.changeTurn();
      console.log(parseInt(event.target.id));
    }
  },
  
  reset: function() {
    this.player1 = {};
    this.player2 = {};
    this.currentTurn = "X";
    var allSquares = document.querySelectorAll('a');
    allSquares.forEach(function(square){
      square.innerHTML = '_';
    });
    
  }
};