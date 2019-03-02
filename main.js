//constuctor function
//Logic of  a game

var WitchGame = function (inputList) {
  this.inputList = inputList,
  this.theWitch = ('witch');
  this.witchClicked = 0;
  this.gameScore = 0;
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
  var _this= this
  if (name === "witch") {
    // var wonElement = `<div class="won"> GOOD JOB! <br>NOW THE WITCH GOES FLYING, CLICK AT IT AS MUCH AS YOU CAN!  </div>`
    //var wonElement = `<div class="won"> YOU WON!!! <br>YOUR SCORE: ${finalScore} </div>`
    // setTimeout(function () {
    //   $('#main').html(wonElement)
    // }, 1000); // timeout
    //$('.again').html('CONTINUE').css('visibility', 'visible'); //show .again class visibility: visible;  
  
  // $('#main').html('');
    _this.flyingWitch();
  } 
} // end of findTheWitch()

var finalScore = this.gameScore;



WitchGame.prototype.score = function (name) {
  var witchesClicked = $('#main .clicked').length;
        //console.log(witchesClicked)
 debugger
  if (witchesClicked == 1 && name === "witch") {
    finalScore = 100;
    //$('.score').html(finalScore)
  }
  else if (witchesClicked == 2 && name === "witch") {
    finalScore = 80;
    //$('.score').html(finalScore)
  }
  else if (witchesClicked == 3 && name === "witch") {
    finalScore = 60;
    //$('.score').html(finalScore)
  }
  else if (witchesClicked == 4 && name === "witch") {
    finalScore = 40;
    //$('.score').html(finalScore)
  }
  else if (witchesClicked == 5 && name === "witch") {
    finalScore = 20;
    //$('.score').html(finalScore)
  }
  else if (witchesClicked == 6 && name === "witch") {
    finalScore = 10;
   // $('.score').html(finalScore)
  }
  
  $('.score').html(finalScore)
}

// WitchGame.prototype.giveAHint = function () {
//   setTimeout(function () {
//     // shake a card
//     
//   }, 10000)
// }

WitchGame.prototype.flyingWitch = function () {
  // hide the button
  // $('.again').css('visibility', 'hidden');
  //make the div visible:
  $('.a').css('visibility', 'visible');

  // Bonus witches:
  setTimeout(function () {$('.b').css('visibility', 'visible')}, 10000)
  setTimeout(function () {$('.c').css('visibility', 'visible')}, 15000)
  setTimeout(function () {$('.d').css('visibility', 'visible')}, 30000)
  
  // end of the game:
  setTimeout(function () {$('.flying–witch').css('visibility', 'hidden')}, 50000) // 5min
  
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
  $('.flying–witch').on('click', function () {
    finalScore++

    $('.score').html(finalScore)
  })
};

// WitchGame.prototype.bonusWitches = function () {
  // create dynamically new divs after x time 
// kas vaja siin uuesti lennutama hakata flyingWitch?
// setTimeout(function () {

//   $('.b').css('visibility', 'visible');

 
 
// }, 1000)
// }

// WitchGame.prototype.gameOver = function (){
//   setTimeout(function (){
//     $('#main').html("Game Over");
//     }, 10000)

// }