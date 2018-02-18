var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  var red = new five.Led(9)
  var blue = new five.Led(11);
  var green = new five.Led(10);
  
  var push_red = new five.Button('A3');
  var push_green = new five.Button('A2');
  var push_blue = new five.Button('A1');
  
  push_red.on('press', function() {
    red.toggle();
  });
  
  push_green.on('press', function() {
    green.toggle();
  });
  
  push_blue.on('press', function() {
    blue.toggle();
    
  });
});
