$(document).ready(function() {
  var game = new Game('0000202000000000');

  // debugger;


  //put game on HTML
  //bind keys
   Mousetrap.bind('up', function() {
      console.log('pressed Up');
      //move game up
      //update DOM

   });

   Mousetrap.bind('down', function() {
      console.log('pressed down');
      //move game down
      //update DOM
   });

   Mousetrap.bind('left', function() {
      console.log('pressed left');
      //move game left
      //update DOM
   });

   Mousetrap.bind('right', function() {
      console.log('pressed right');
      //move game right
      //update DOM
   });
});
