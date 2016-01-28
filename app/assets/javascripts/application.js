// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .


// var a = $(".nav").offset().top;

// $(document).scroll(function(){
//     if($(this).scrollTop() > a){
//        $('.navbar').animate({backgroundColor: 'rgba(34, 34, 34, 0.6)'}, 3000);
//     } else {
//        $('.navbar').css({"background":"#222"});
//     }
// });

var a = $(".nav").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {
       $('.navbar').css({"backgroundColor":"rgba(34, 34, 34, 0.6)"});
    } else {
       $('.navbar').css({"backgroundColor":"rgba(34, 34, 34, 1.0)"});
    }
});

$(function() {
   $("li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});

$('.fa-times').click(function() {

	$('.jumbotron').css({"display": "none"});
});

$(function() {
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

$(document).ready(function(){
    $(this).scrollTop(0);
});


  $('.player').click(function(){ //Use the position to seek when clicked
    $('.position').css('width',scrub+"px");
    var seek = player.duration*(scrub/pWidth);

    //Seeking to the start would be a previous?
    if ( seek < player.duration * .05 ) {
      player.prev();
    } else if ( seek > player.duration * .99 ) {
      player.next();
    } else {
      player.seekTo(seek);
    }

  });

   function setInfo() {
    player.getCurrentSound(function(song) {
      console.log(song);

      $('.waveform').css('background-image', "url('" + song.waveform_url + "')");
      $('.player').css('background-image', "url('" + song.artwork_url.replace('-large', '-t500x500') + "')");

      var info = song.title;
      $('.info').html(info);

      player.current = song;
    });

    player.getDuration(function(value){
      player.duration = value;
    });

    player.isPaused(function(bool){
      player.getPaused = bool;
    });
  }

});



