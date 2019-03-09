//user interaction
// dom manipulation
//mis juhtub mis

var theList = [{
    img: './images/h10.jpg',
    name: 'witch'
  },
  {
    img: './images/h9.jpg',
    name: 'pumpkin'
  },
  {
    img: './images/h8.jpg',
    name: 'bats'
  },
  {
    img: './images/h5.jpg',
    name: 'cat'
  },
  {
    img: './images/h7.jpg',
    name: 'house'
  },
  {
    img: './images/h2.png',
    name: 'scarypumpkin'
  }
];

$(document).ready(function () {
  // makes a new game from constructor:
  var theWitchGame = new WitchGame(theList);

  // shuffles the images in theList array
  theWitchGame.randomImage(theList);

  // starting point of the game - the pics are added dynamically
  theWitchGame.startGame(theList)

  console.log(theList)

  // GAME ON - player clicks on a choosen card:
  $('.box').on('click', function () {
    //console.log($(event.currentTarget))
    console.log($(this).attr('id'))
    $(this).toggleClass('clicked')

    // show score also after first click:
    $('#corner').css('visibility', 'visible')

    var random = theWitchGame.inputList[$(this).attr('id')];

    $(this).attr('src', random.img);
    var _this = this;
    // setTimeout(function () {  // !! not in the middle
    //   $(_this).toggleClass('show box');  
    // }, 1000);
    setTimeout(function () {
      $(_this).css('visibility', 'hidden');
      //$("#snd1")[0].play(); // plays a sound of the image
    }, 2000)
    theWitchGame.findTheWitch(random.name)
    theWitchGame.score(random.name)
  })

  // PART II clicking
  theWitchGame.clickOnWitch()
  
  // PART III start again:
  $('.again').on('click', function () {
    location.reload();
  })
}); // doc ready end

