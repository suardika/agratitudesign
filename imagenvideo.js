jQuery(document).ready(function($){
    $('.lightbox').lightbox();
  });
  
  jQuery(document).ready(function($) {
    $('.videobox').live('click', function(ev) {
      
      var video = $(this).attr('href');
      
      $.lightbox('http://www.yourdomain.com/player.swf', {
        force: 'flash',
        flashvars: 'file='+video+'&autostart=true&stretching=fill'
      });
      
      ev.preventDefault();
    
    });
  });