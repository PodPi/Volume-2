// Load the johhny-five library and commands
var five = require('johnny-five');
var board = new five.Board();

// Execute this function when the board is ready
board.on('ready', function() {

  // define all 3 RGB LEDs (each color)
  var red1 = new five.Led(9);    // RGB LED 1 color Red
  var blue1 = new five.Led(10);  // RGB LED 1 color Blue
  var green1 = new five.Led(11); // RGB LED 1 color Green
  var red2 = new five.Led(6);    // RGB LED 2 color Red
  var blue2 = new five.Led(7);   // RGB LED 2 color Blue
  var green2 = new five.Led(8);  // RGB LED 2 color Green
  var red3 = new five.Led(3);    // RGB LED 3 color Red
  var blue3 = new five.Led(4);   // RGB LED 3 color Blue
  var green3 = new five.Led(5);  // RGB LED 3 color Green

  // define all three buttons
  var but1 = new five.Button("A2"); // Button 1 on Analog Pin A2
  var but2 = new five.Button("A3"); // Button 2 on Analog Pin A3
  var but3 = new five.Button("A4"); // Button 3 on Analog Pin A4

  // define the sensors
  var pot = new five.Sensor("A1");  // Potentiometer on Analog Pin A4
  var cel = new five.Sensor("A0");  // Temperature sensor on Analog Pin A5

  // When button 1 is pressed
  but1.on('press', function() {
    red3.toggle();
  });

  // When button 2 is pressed
  but2.on('press', function() {
    blue3.toggle();
  });
 
  // When button 3 is pressed
  but3.on('press', function() {
    green3.toggle();
  });

    // When temperature sensor value changes
  cel.on("change", function() {

    console.log('value=' + this.value );

    // adjust the values based on your tests
    if ( this.value > 760 ) {
      red2.blink(this.value);
    } else if ( this.value > 430 ) {
      blue2.blink(this.value);
    } else if ( this.value > 0) {
      green2.blink(this.value);
    }
  });

  // When the potentiometer value changes
  pot.on("change", function() {
    console.log('value=' + this.value );
    // adjust the values based on your tests
    if ( this.value > 460 ) {
      red1.blink(this.value);
    } else if ( this.value > 430 ) {
      blue1.blink(this.value);
    } else if ( this.value > 410) {
      green1.blink(this.value);
    }
  });

});
