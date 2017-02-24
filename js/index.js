$( document ).ready(function() {

var myVideo =  document.getElementById('myVideo');
myVideo.volume = 0;

$("#myVideo").on("click", function(){
  var myVideo =  document.getElementById('myVideo');
  if(myVideo.volume > 0){
    myVideo.volume = 0;
  }else{
    myVideo.volume = 0.5;
  }
});


    $('.dress').hover(function() {
      $('.dress img').attr('src','img/galore-pink-satin-cowl-halterneck-mini-dress.gif');
    },function(){
      $('.dress img').attr('src','img/galore-pink-satin-cowl-halterneck-mini-dress.jpg');
    });
    $('.shirt').hover(function() {
      $('.shirt img').attr('src','img/galore-pink-satin-skinny-fit-shirt.gif');
    },function(){
      $('.shirt img').attr('src','img/galore-pink-satin-skinny-fit-shirt.jpg');
    });
    $('.jacket').hover(function() {
      $('.jacket img').attr('src','img/galore-nude-satin-jacket.gif');
    },function(){
      $('.jacket img').attr('src','img/galore-nude-satin-jacket-2.jpg');
    });
});
