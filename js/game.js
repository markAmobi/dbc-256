function Game(board){
  this.board = board || '0000202000000000';
  this.twoDArray = [];

}




Game.prototype.toString = function(){
  var finalString = this.board.substr(0,4) + "\n" +
                    this.board.substr(4,4) + "\n" +
                    this.board.substr(8,4) + "\n" +
                    this.board.substr(12,4)
  return finalString;
}




Game.prototype.singleArray = function(){

}

Game.prototype.twoDArray = function(){

}

Game.prototype.singleString = function(){

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
