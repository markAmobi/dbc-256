/**
  the 2D array shall preserve the current state of the board at any point in time.
**/

function Game(board){
  this.board = board || '0000202000000000';
  this.twoDArray = convertStringTo2DArray(this.board);
}

Game.prototype.toString = function(){
  var finalString = this.board.substr(0,4) + "\n" +
                    this.board.substr(4,4) + "\n" +
                    this.board.substr(8,4) + "\n" +
                    this.board.substr(12,4)
  return finalString;
}

Game.prototype.oneDArray = function(){
  return _.flatten(this.twoDArray);
}

Game.prototype.twoDArray = function(){
  return this.twoDArray;
}

Game.prototype.singleString = function(){
  return convert2DArrayToString(this.twoDArray);
}

Game.prototype.moveLeft = function(){
  moveArrayLeft(this.twoDArray);
}

Game.prototype.moveRight = function(){
  moveArrayRight(this.twoDArray);
}

Game.prototype.moveUp = function(){
  this.twoDArray = moveArrayUp(this.twoDArray);
}

Game.prototype.moveDown = function(){
  this.twoDArray = moveArrayDown(this.twoDArray);
}


// Game.prototype.moveLeft = function(){
//   this.moveRowLeft(0); //move row 1 left
//   this.moveRowLeft(1); //move row 2 left
//   this.moveRowLeft(2); //move row 3 left
//   this.moveRowLeft(3); //move row 4 left

// }

// Game.prototype.moveRowLeft = function(row){
//   var currentRow = this.gameArray[row];
// }
