
/**
this function takes a 2D array, and does a left collapse on the whole thing.
**/
function moveArrayLeft(arr){
  moveRowLeft(arr, 0); //move row 1 left
  moveRowLeft(arr, 1); //move row 2 left
  moveRowLeft(arr, 2); //move row 3 left
  moveRowLeft(arr, 3); //move row 4 left

}

/**
this function takes a 2d array, and a row number, and then does all necessary collapse
from left to right. (ie when user presses left. )
**/
function moveRowLeft(arr, row){ //arr is 2d array, row is row number.
  var currentRow = arr[row];
  collapseLeft(arr, row, 0);
  collapseLeft(arr, row, 1);
  collapseLeft(arr, row, 2);
  collapseLeft(arr, row, 3);

}

/**
this function takes a 2D arr, a row num, and a col num and does a left collapse(2048 style.)
**/
function collapseLeft(arr, row, col){ //recursive collapse.
  if(col === 0){
    // return array;
  }

  //-------------------------- fix col 1.
  else if(col === 1){
    if(arr[row][0] === 0){
      arr[row][0] = arr[row][1];
      arr[row][1] = 0;
    }
    else if(arr[row][0] === arr[row][1]){
      arr[row][0] = arr[row][0] + arr[row][1];
      arr[row][1] = 0;
    }
    else { //do nothing

    }
    // return array;
  }

  //------------------------- fix col 2.
  else if(col === 2){
    if(arr[row][1] === 0){
      arr[row][1] = arr[row][2];
      arr[row][2] = 0;
      collapseLeft(arr, row, 1);
    }
    else if(arr[row][1] === arr[row][2]){
      arr[row][1] = arr[row][1] + arr[row][2];
      arr[row][2] = 0;
      collapseLeft(arr, row, 1);
    }
    else { //do nothing
      // return array;
    }
  }
  //--------------------- fix col 3 .
  else if(col === 3){
    if(arr[row][2] === 0){
      arr[row][2] = arr[row][3];
      arr[row][3] = 0;
      collapseLeft(arr, row, 2);
    }
    else if(arr[row][2] === arr[row][3]){
      arr[row][2] = arr[row][2] + arr[row][3];
      arr[row][3] = 0;
      collapseLeft(arr, row, 2);
    }
    else { //do nothing
      // return array;
    }
  }
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
