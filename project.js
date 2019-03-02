
//user interaction
//mis juhtub mis

var theList = [ 
  {img: './images/h10.jpg' , name: 'witch'},
  {img: './images/h9.jpg' ,name:'pumpkin'},
  {img:'./images/h8.jpg' , name: 'bats'},
  {img:'./images/h5.jpg' , name:'cat'},
  {img:'./images/h7.jpg' , name:'house'},
  {img:'./images/h2.png' , name:'scarypumpkin'}
];

$(document).ready(function () {
  animateDiv('.a');

// makes a new game with theList items
var theWitchGame = new WitchGame(theList);

// shuffles the images in theList array
theWitchGame.randomImage(theList);

// starting point of the gsme - the pics are added dynamically
theWitchGame.startGame(theList)

console.log(theList)

// Game on - player clicks on a choosen card:
$('.box').on('click', function (){
  //console.log('you clicked a witch')
  //console.log($(event.currentTarget))
  console.log($(this).attr('id'))
  $(this).toggleClass('clicked')
  
  // show score also after firt click:
  $('#corner').css('visibility', 'visible')


  var random = theWitchGame.inputList[$(this).attr('id')];

   $(this).attr('src', random.img);
 
   var _this = this;
  //  setTimeout(function(){
  //   $(_this).toggleClass('show box'); // !! messes view
  // },1000);
    setTimeout(function(){
    $(_this).css('visibility', 'hidden');
    //$("#snd1")[0].play(); // plays a sound of the image
    }, 2000)

   theWitchGame.findTheWitch(random.name)
   theWitchGame.score(random.name)


})

$('.again').on('click', function(){
  location.reload();
})


///
//moving divs:
function makeNewPosition(){
    
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(myclass){
  var newq = makeNewPosition();
  $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
    animateDiv(myclass);        
  });

};
});
