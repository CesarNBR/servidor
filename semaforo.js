var g=1;
var a=0;
var r=0;
var blinkInterval = setInterval(blinkLED, 1000); //run the blinkLED function every 250ms
console.log("green");
function blinkLED() { 
  if (g==1){
  console.log("amber");
    g=0,  a=1,  r=0;
  }
  else if (a==1){
    console.log("red");
  g=0,  a=0,  r=1;
  }
  else if (r==1){
    console.log("green");
  g=1,  a=0,  r=0;
  }
}
 
function unexportOnClose() { //function to run when exiting program
  clearInterval(blinkInterval); // Stop blink intervals
//  LED.writeSync(0); // Turn LED off
//  LED.unexport(); // Unexport LED GPIO to free resources
//  pushButton.unexport(); // Unexport Button GPIO to free resources
};
 
process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c