var $body = document.body;
var $lightswitch = document.getElementById('lightswitch');
var light = true;

var switchLight = function(){
  if (light){
    $body.className = 'night';
    light = false;
  }
  else {
    $body.removeAttribute('class');
    light = true;
  }
}

$lightswitch.onclick = switchLight;
