// Setup the johnny-five library
var five = require('johnny-five');
var board = new five.Board();

// Execute this function when the board is ready
board.on('ready', function() {

  // Define the RGB LED
  var red = new five.Led(7);    // red on Digital Pin 7
  var blue = new five.Led(8);  // blue on Digital Pin 8
  var green = new five.Led(9); // green on Digital Pin 9

  // Temperature sensor on Analog Pin A1
  var celsius = new five.Sensor("A1");

  // Execute this function when the sensor value changes
  celsius.on("change", function() {

    console.log('value=' + this.value ); // send message

    // adjust the values based on your tests
    if ( this.value > 460 ) {
      red.blink(this.value);
    } else if ( this.value > 430 ) {
      blue.blink(this.value);
    } else if ( this.value > 410) {
      green.blink(this.value);
    }
  });

});
