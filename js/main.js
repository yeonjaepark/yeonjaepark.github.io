/* fade in homepage */
$(document).ready(function(){
    $('div.hidden').fadeIn(1000).removeClass('hidden');
});

/* smooth scroll pages */
$(document).ready(function() {
    $("#logo").click(function(){
        $('html, body').animate({
          scrollTop: $("#home").offset().top
        }, 700);
        return false;
    });
    $(".aboutbutton").click(function(){
        $('html, body').animate({
          scrollTop: $("#about").offset().top
        }, 700);
        return false;
    });
    $("#workbutton").click(function(){
        $('html, body').animate({
          scrollTop: $("#work").offset().top
        }, 700);
        return false;
    });
    $("#contactbutton").click(function(){
        $('html, body').animate({
          scrollTop: $("#contact").offset().top
        }, 700);
        return false;
    });
});
