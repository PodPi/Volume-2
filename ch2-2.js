// Setup the johnny-five library
var five = require('johnny-five');
var board = new five.Board();

// Execute this function when the board is ready
board.on('ready', function() {

  // Define the RGB LED
  var red = new five.Led(9);    // red on Digital Pin 9
  var blue = new five.Led(10);  // blue on Digital Pin 10
  var green = new five.Led(11); // green on Digital Pin 11

  // Define the sensor
  var pot = new five.Sensor("A0"); // Pot on Analog Pin A0

  // Execute this function when the sensor value changes
  pot.on("change", function() {

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
