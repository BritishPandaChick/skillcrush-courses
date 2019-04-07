$(document).ready(function(){
    $('#my-button').click(function() {
        setTimeout(function(){
          $('#my-header').fadeIn('slow'), function() {
             $('#my-header').fadeOut('slow'), function() {
               $('#my-header').fadeIn('fast').css('color', '#B0171F');
             });
          });
        }, 1000);
    });
});