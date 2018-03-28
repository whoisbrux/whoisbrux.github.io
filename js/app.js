



 var bodyRect = document.body.getBoundingClientRect(window);
var www = bodyRect.height
 
$(window).click(function() { 
  console.log(bodyRect.height)
});


TweenMax.set(".back", { height: www });
