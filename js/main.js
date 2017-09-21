/* fade in homepage */
$(document).ready(function(){
    $('.content').fadeIn(2000);
});

/* smooth scroll pages */
$(document).ready(function() {
    $("#logo").click(function(){
        $('html, body').animate({
          scrollTop: $("#home").offset().top
        }, 700);
        return false;
        /*event.preventDefault();*/
    });
    $(".aboutbutton").click(function(){
        $('html, body').animate({
          scrollTop: $("#about").offset().top
        }, 700);
        return false;
        /*event.preventDefault();*/
    });
    $("#workbutton").click(function(){
        $('html, body').animate({
          scrollTop: $("#work").offset().top
        }, 700);
        return false;
        /*event.preventDefault();*/
    });
    $("#contactbutton").click(function(){
        $('html, body').animate({
          scrollTop: $("#contact").offset().top
        }, 700);
        return false;
        /*event.preventDefault();*/
    });
});
