//constuctor function
//Logic of  a game

var WitchGame = function (inputList) {
  this.inputList = inputList,
    this.witchClicked = 0;
  this.gameScore = 0;
  this.currentTime = 60
  this.intervalId = 0
}

WitchGame.prototype.randomImage = function (inputList) {
  var x = inputList.length;
  var temp;
  var index;
  while (x > 0) {
    index = Math.floor(Math.random() * x);
    x--;
    temp = inputList[x];
    inputList[x] = inputList[index];
    inputList[index] = temp;
  }
  this.inputList = inputList;
}
var html = '';
WitchGame.prototype.startGame = function (inputList) {
  for (i = 0; i < inputList.length; i++) {
    html += '<img src="./images/witch.jpg" id="' + i + '" class="box">';
  }
  //  Add all the div's to the HTML
  $('#main').html(html);
}

WitchGame.prototype.findTheWitch = function (name) {
  console.log(name)
  var _this = this
  if (name === "witch") {
    // if name == witch then hide all other cards from the table
    setTimeout(function () {
      $('#main').css('visibility', 'hidden')
    }, 1000);

    //and flying witch goes flying:
    _this.flyingWitch();
  }
} // end of findTheWitch()

var finalScore = this.gameScore;

WitchGame.prototype.score = function (name) {
  var witchesClicked = $('#main .clicked').length;
  if (name === "witch") {
    finalScore = 10 - witchesClicked
  }
  $('.score').html(finalScore)
}

WitchGame.prototype.flyingWitch = function () {
  var _this = this;
  // change h2 text:
  $('h2').html('Click on the flying witch!!')
  // show the timer:
  $('#clock').css('visibility', 'visible');

  // start timer:
  clock.start(function() {
    _this.gameOver();
  });


  //make the flying div visible:
  $('.a').css('visibility', 'visible');

  // Bonus witches appear:
  setTimeout(function () {
    $('.b').css('visibility', 'visible')
  }, 1000)
  setTimeout(function () {
    $('.c').css('visibility', 'visible')
  }, 20000)
  setTimeout(function () {
    $('.d').css('visibility', 'visible')
  }, 30000)



  // the div starts flying
  animateDiv('.a');
  animateDiv('.b');
  animateDiv('.c');
  animateDiv('.d');
  //moving divs:
  function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];
  }

  function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({
      top: newq[0],
      left: newq[1]
    }, 1000, function () {
      animateDiv(myclass);
    });
  };
}

WitchGame.prototype.clickOnWitch = function () {
  console.log(this.witchClicked)
  var _this = this
  var shown = true;

  $('.flying–witch').on('click', function () {
    finalScore++
    $('.score').html(finalScore);
    //TOOLTIP bubble image:
    shown ? $(_this).hideBalloon() : $(_this).showBalloon();
    shown = !shown;
  }).showBalloon({});


};

WitchGame.prototype.gameOver = function () {
  // show points on screen 
  var wonElement = "WELL DONE!!! YOUR SCORE: "
    $('h2').html(wonElement + finalScore)
    $('.again').css('visibility', 'visible');
     
    // remove witches:
    $('.flying–witch').css('visibility', 'hidden')

}




