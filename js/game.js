function Game(board){
  this.board = board || '0000202000000000';
}

function get2Or4(){
  var choice = Math.round(Math.random());
  if (choice === 0)
    return 2;
  else return 4;
}

function getRandom0_15(){
  return Math.random() * 15;
}

Game.prototype.toString = function(){
  var finalString = this.board.substr(0,4) + "\n" +
                    this.board.substr(4,4) + "\n" +
                    this.board.substr(8,4) + "\n" +
                    this.board.substr(12,4)

  return finalString;
}

Game.prototype.moveLeft = function(){
  this.moveRowLeft(0); //move row 1 left
  this.moveRowLeft(1); //move row 2 left
  this.moveRowLeft(2); //move row 3 left
  this.moveRowLeft(3); //move row 4 left

}

Game.prototype.moveRowLeft = function