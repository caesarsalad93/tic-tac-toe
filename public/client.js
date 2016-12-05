// _||_
// _  _
//  ||

var ttt = {
  AI: false,
  player1: {},
  player2: {},
  
  gameStatus:"In progress",
  userPick:"",
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
     //Diagonal wins
     this.player1.hasOwnProperty(0) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(8) ||
     this.player1.hasOwnProperty(2) && this.player1.hasOwnProperty(4) && this.player1.hasOwnProperty(6)
    )
    {
    this.gameStatus = "won";
    this.player1 = {};
    this.player2 = {};
    setTimeout(function(){alert('X wins!')}, 100);
    }
    else if(//Horizontal Wins
     this.player2.hasOwnProperty(0) && this.player2.hasOwnProperty(1) && this.player2.hasOwnProperty(2) ||
     this.player2.hasOwnProperty(3) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(5) ||
     this.player2.hasOwnProperty(6) && this.player2.hasOwnProperty(7) && this.player2.hasOwnProperty(8) ||
     //Vertical Wins
     this.player2.hasOwnProperty(0) && this.player2.hasOwnProperty(3) && this.player2.hasOwnProperty(6) ||
     this.player2.hasOwnProperty(1) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(7) ||
     this.player2.hasOwnProperty(2) && this.player2.hasOwnProperty(5) && this.player2.hasOwnProperty(8) ||
     //Diagonal wins
     this.player2.hasOwnProperty(0) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(8) ||
     this.player2.hasOwnProperty(2) && this.player2.hasOwnProperty(4) && this.player2.hasOwnProperty(6)
    )
    {
      this.gameStatus = "won";
      this.player1 = {};
      this.player2 = {};
      setTimeout(function(){alert("O wins!")}, 100);
    }
    else if(Object.keys(this.player1).length===5 || Object.keys(this.player2).length===5){
      this.gameStatus = "won";
      this.player1 = {};
      this.player2 = {};
      setTimeout(function(){alert("It's a draw!")}, 100);
    }
  },
  
  move: function(player, sqNum) {
    if(player === this.symbol1){
      ttt.player1[sqNum] = true;
    }else if(player === this.symbol2){
      ttt.player2[sqNum] = true;
    }
    this.checkWin();
  },
  
  fillSquare: function() {
    var sqNum = parseInt(event.target.id); //0-8
    var sqTarget = event.target;
    if(sqTarget.innerHTML === '_'){
      sqTarget.innerHTML = ttt.currentTurn;
      this.move(this.currentTurn, sqNum);

      this.changeTurn();
      this.computer();
      
    }
  },
  
  computer: function(){
    if(this.AI === true && this.gameStatus === "In progress"){
      var randomSquare = Math.floor(Math.random()*9);
      
      if(this.currentTurn !== this.userPick){
        document.getElementById(randomSquare).click();
        
          if(this.currentTurn !== this.userPick){
            this.computer();
        }
      }
    }
  },
    
  toggleAI: function(){
    this.AI = !this.AI;
    this.AI ? document.querySelector('h2').innerHTML = "You are Playing against the computer as " + ttt.userPick :
    document.querySelector('h2').innerHTML = "2 Players!";
    this.computer();
  },
  
  reset: function() {
    this.player1 = {};
    this.player2 = {};
    this.currentTurn = this.userPick;
    this.gameStatus = "In progress";
    var allSquares = document.querySelectorAll('a');
    allSquares.forEach(function(square){
      square.innerHTML = '_';
    });
  },
  
  hide: function() {
    document.getElementById('pickShape').style.display = "none";
    document.getElementById('board').style.display = "block";
  },
};

var view = {
  setUpEventListeners: function() {
    document.getElementById('X').addEventListener('click', function(){
      ttt.currentTurn === 'O' ? ttt.changeTurn() : ttt.currentTurn = 'X';
      ttt.userPick = event.target.id;
    });
    document.getElementById('O').addEventListener('click', function(){
      ttt.currentTurn === 'X' ? ttt.changeTurn() : ttt.currentTurn = 'O';
      ttt.userPick = event.target.id;
    });
    document.getElementById('pickShape').addEventListener('click', function(){
      ttt.hide();
    });
    document.getElementById('reset').addEventListener('click', function(){
      ttt.reset();
    });
    document.getElementById('toggleAI').addEventListener('click', function(){
      ttt.toggleAI();
    });
    document.getElementById('board').style.display = "none";
  },
};
view.setUpEventListeners();