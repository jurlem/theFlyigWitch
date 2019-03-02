//constuctor function
//Logic of  a game

var WitchGame = function (inputList){
  this.inputList = inputList,
  this.theWitch = ('witch');
  //console.log(inputList.name('flying'))
  this.cardClicked = ""
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
  for(i=0; i<inputList.length; i++){
    html += '<img src="./images/witch.jpg" id="'+i+'" class="box">';
  }
  //  Add all the div's to the HTML
  $('#main').html(html);
   // add fadeIn - no luck
   //$('.box').fadeIn()
}

// WitchGame.prototype.hide = function(){
//   //var _this = this;
//   setTimeout(function(){
//    //$(this).toggleClass('show'); //show full image
//    $(_this).css('visibility', 'hidden');
//    //$("#snd1")[0].play(); // plays a sound of the image
//  },1000);
// }


WitchGame.prototype.findTheWitch = function (name){
  console.log(name)
  var finalScore = this.gameScore;
  if(name === "witch") {
    var wonElement = `<div class="won"> YOU WON!!! <br>YOUR SCORE: ${finalScore} </div>`
    setTimeout(function(){$('#main').html(wonElement)}, 1000); // timeout
    $('.again').css('visibility', 'visible'); //show .again class visibility: visible;

        // show score
  
    

    // scooring logic - max points if first guess
  } else if(name != "witch"){
    //this.cardFades()
    // bat sound  squeeks
}
   } 


// WitchGame.prototype.cardFades = function (){
//   //opacity 
// };


WitchGame.prototype.score = function(name){
  var witchesClicked = $('#main .clicked').length;
  console.log(witchesClicked)

    if (witchesClicked ==1 &&  name != "witch"){
      this.gameScore = 10;
      $('.score').html(this.gameScore) 
    } else if (witchesClicked ==1 &&  name === "witch"){
      
      $('.score').html('100') 
      } if (witchesClicked ==2 && name != "witch"){
      $('.score').html('20')
     } else if (witchesClicked ==2 &&  name === "witch"){
      $('.score').html('90') 
     } if (witchesClicked ==3 &&  name != "witch"){
      $('.score').html('30') 
    } else if (witchesClicked ==3 &&  name === "witch"){
      $('.score').html('80') 
     } if (witchesClicked ==4 &&  name != "witch"){
      $('.score').html('40') 
    } else if (witchesClicked ==4 &&  name === "witch"){
      $('.score').html('70') 
     }   if (witchesClicked ==5 &&  name != "witch"){
      $('.score').html('50') 
    } else if (witchesClicked ==5 &&  name === "witch"){
      $('.score').html('60') 
     }  if (witchesClicked ==6 &&  name != "witch"){
      $('.score').html('60') 
    } else if (witchesClicked ==6 &&  name === "witch"){
      $('.score').html('50') 
     } 
     
     //if (witchesClicked ==3 ){
      
    // } if (witchesClicked ==4 ){
      
    // } if (witchesClicked ==5 ){
      
    // } if (witchesClicked ==6 ){
      
    // }

  }

WitchGame.prototype.giveAHint = function(){
  setTimeout(function(){
    //flip one card around (preferebly the one without 
    // class 'clicked')

  }, 10000)
}