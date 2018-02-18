// Setup the johnny-five library
var five = require('johnny-five');
var board = new five.Board();

// When the board is ready, run this function
board.on('ready', function() {

  var red = new five.Led(9);    // red on Digital Pin 9
  var blue = new five.Led(10);  // blue on Digital Pin 10
  var green = new five.Led(11); // green on Digital Pin 11

  var push_red = new five.Button("A4");   // button on Analog Pin A4
  var push_green = new five.Button("A3"); // button on Analog Pin A3
  var push_blue = new five.Button("A2");  // button on Analog Pin A2

  // when button Red is pushed, toggle the red LED
  push_red.on('press', function() {
    red.toggle();
  });

  // when button Green is pushed, toggle the green LED
  push_green.on('press', function() {
    green.toggle();
  });

  // when button Blue is pushed, toggle the blue LED
  push_blue.on('press', function() {
    blue.toggle();
  });

});
