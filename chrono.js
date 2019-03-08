// constructior function
function Timer() {
  this.seconds = 59;
  this.miliseconds = 99;
  this.intervalId = "";
}

//start function
Timer.prototype.start = function () {
  this.intervalId = setInterval(this.run.bind(this), 10);
};

Timer.prototype.run = function () {
  if (this.miliseconds > 0) {
    this.miliseconds--;
    console.log((String(this.seconds).padStart(2,0)) + ":" + (String(this.miliseconds).padStart(2,0)))
    var msec = String(this.miliseconds).padStart(2,0)
    //update dom
    $('#msec').html(msec)

  } else if (this.seconds == 0) {
    console.log("Stop this")
    // cleals interval = stops it
    clearInterval(this.intervalId)
  } else {
    
    this.seconds--;
    console.log((String(this.seconds).padStart(2,0)) + ":" + (String(this.miliseconds).padStart(2,0)))

    //milsec starts again
    this.miliseconds = 100;
    var sec = String(this.seconds).padStart(2,0)
    //update dom
    $('#sec').html(sec)
  }
}



//this.intervalId = "";
////////////////////

var clock = new Timer()

//clock.start()