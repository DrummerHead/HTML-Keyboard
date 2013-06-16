var $body = $('body');
var light = true;

$('#lightswitch').on('click', function(){
  if (light){
    $body.addClass('night');
    light = false;
  }
  else {
    $body.removeClass('night');
    light = true;
  }
})
