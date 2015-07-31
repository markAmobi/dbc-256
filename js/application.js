$(document).ready(function() {
  var game = new Game('0000202000000000');
  updateDOM(game);
  // debugger;


  //put game on HTML
  //bind keys
   Mousetrap.bind('up', function() {
      game.moveUp();
      updateDOM(game);

   });

   Mousetrap.bind('down', function() {
      game.moveDown();
      updateDOM(game);
   });

   Mousetrap.bind('left', function() {
      game.moveLeft();
      updateDOM(game);
   });

   Mousetrap.bind('right', function() {
      game.moveRight();
      updateDOM(game);
   });
}); //end document ready.

function updateDOM(game){
  // debugger;
  var gameArray = game.get2DArray();

  updateRow(gameArray, 0);
  updateRow(gameArray, 1);
  updateRow(gameArray, 2);
  updateRow(gameArray, 3);
}

function updateRow(gameArray, rowNum){
  var row = gameArray[rowNum];
  var tableRow = $("#r" + rowNum);
  var content = "";
  for(var i=0; i<4; i++){
    content += "<td>"+ row[i] +"</td>"
  }
  tableRow.html(content);
}
