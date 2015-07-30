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

Game.prototype.moveRowLeft = function(row){
  var currentRow = this.gameArray[row];


}

function collapseLeft(array, colNumber){ //recursive collapse.
  if(colNumber === 0){
    return array;
  }

  //-------------------- fix col 1.
  else if(colNumber === 1){
    if(array[0] === 0){
      a[0] = a[1];
      a[1] = 0;
    }
    else if(array[0] === array[1]){
      a[0] = a[0] + a[1];
      a[1] = 0;
    }
    else { //do nothing

    }
    return collapseLeft(array, 0);
  }

  //------------------------- fix col 2.
  else if(colNumber === 1){
    if(array[1] === 0){
      a[1] = a[2];
      a[2] = 0;
      return collapseLeft(array, 1);
    }
    else if(array[1] === array[2]){
      a[1] = a[1] + a[2];
      a[2] = 0;
      return collapseLeft(array, 1);
    }
    else { //do nothing

    }
    return collapseLeft(array, 1);
  }
  //--------------------- fix col 3 .
  else if(colNumber === 1){
    if(array[0] === 0){
      a[0] = a[1];
      a[1] = 0;
    }
    else if(array[0] === array[1]){
      a[0] = a[0] + a[1];
      a[1] = 0;
    }
    else { //do nothing

    }
    return collapseLeft(array, 2);
  }
}
