
TweenMax.to(".boxDescri p", 0, {opacity:"0"});
TweenMax.to(".bordaHome", 0, {width:"0", opacity:"0"});
TweenMax.to(".btnSaiba", 0, {opacity:"0"});


var tl = new TimelineLite({paused: true});
  	tl
  	
		
  	.to(".bordaT1", 0.5, { height:"100%"})
  	.to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
  	.to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
  	.to(".bordaL1", 0.5, { width:"100%"},"-=0.5")
    
  	.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
  	.to(".main", 1.5, {ease: Expo.easeInOut, top:"-100vh"},"-=0.5")

  	.to(".bordaT1", 0.5, { height:"0%"})
  	.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
  	.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
  	.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
  	.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1})
  	.from(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
  	.from(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.5")

		.addPause()
  	.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"0px"})
  	.to(".bordaHome", 2, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1")
  	.to(".boxDescri p", 1.5, {opacity:"1"} ,"-=0.5")





$('.logoHome').on('click',function() {
        tl.play();
	});

$('.menuDesk').on('click',function() {
        tl.reverse();
	});

