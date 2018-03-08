
TweenMax.to(".boxDescri p", 0, {opacity:"0"});
TweenMax.to(".bordaHome", 0, {width:"0", opacity:"0"});
TweenMax.to(".btnSaiba", 0, {opacity:"0"});
TweenMax.to(".trigger", 0, {opacity:"0"});



var tl = new TimelineLite({paused: true});
  	tl
  	
		
  	.to(".bordaT1", 0.4, { height:"100%"})
  	.to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
  	.to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
    .to(".bordaL1", 0.4, { width:"100%"},"-=0.4")  	
    
  	.to(".ctnCentral", 1.2, {ease: Expo.easeInOut, y:"300px", opacity:0},"-=0.1")
  	.to(".main", 1.5, {ease: Expo.easeInOut, top:"-100vh"},"-=0.7")
    .to(".trigger", 1, {opacity:"1"})

    .to(".lt1", 0.5, { width:"100%"},"-=0.6")
    .to(".tc1", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

  	.to(".bordaT1", 0.5, { height:"0%"})
  	.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
  	.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
  	.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
  	.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
  	.from(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
  	.from(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7")

		.addPause()
  	.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"})
  	.to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
  	.to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")







    
.addPause()
    .to(".bordaT1", 0.5, { height:"100%"})
    .to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

    .to(".lt1", 0.5,  { width:"0%"},"-=0.3")
    .to(".tc1", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")
    
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
    .to(".main", 1.5, {ease: Expo.easeInOut, top:"-200vh"},"-=0.5")

    .to(".lt2", 0.5, { width:"100%"},"-=0.6")
    .to(".tc2", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

    .to(".boxDescri p", 0,{opacity:"0"})
    .to(".trianguloDesk", 0, {scale:2, opacity:0})
    .to(".boxNumeral", 0, {x:"100px", opacity:0})
    .to(".bordaHome", 0, {width:"0%", opacity:"0"})
    .to(".btnSaiba", 0, {opacity:"0"})

    .to(".bordaT1", 0.5, { height:"0%"})
    .to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1})
    .to(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:1, opacity:1},"-=1")
    .to(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"0px", opacity:1},"-=0.5")

    .addPause()
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"0px"})
    .to(".bordaHome", 2, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1")
    .to(".boxDescri p", 1.5, {opacity:"1"} ,"-=0.5")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")





.addPause()
    .to(".bordaT1", 0.5, { height:"100%"})
    .to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

    .to(".lt2", 0.5,  { width:"0%"},"-=0.3")
    .to(".tc2", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")
    
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
    .to(".main", 1.5, {ease: Expo.easeInOut, top:"-300vh"},"-=0.5")

    .to(".lt3", 0.5, { width:"100%"},"-=0.6")
    .to(".tc3", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

    .to(".boxDescri p", 0,{opacity:"0"})
    .to(".trianguloDesk", 0, {scale:2, opacity:0})
    .to(".boxNumeral", 0, {x:"100px", opacity:0})
    .to(".bordaHome", 0, {width:"0%", opacity:"0"})
    .to(".btnSaiba", 0, {opacity:"0"})

    .to(".bordaT1", 0.5, { height:"0%"})
    .to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1})
    .to(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:1, opacity:1},"-=1")
    .to(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"0px", opacity:1},"-=0.5")

    .addPause()
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"0px"})
    .to(".bordaHome", 2, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1")
    .to(".boxDescri p", 1.5, {opacity:"1"} ,"-=0.5")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")






.addPause()
    .to(".bordaT1", 0.5, { height:"100%"})
    .to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

    .to(".lt3", 0.5,  { width:"0%"},"-=0.3")
    .to(".tc3", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")
    
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
    .to(".main", 1.5, {ease: Expo.easeInOut, top:"-400vh"},"-=0.5")

    .to(".lt4", 0.5, { width:"100%"},"-=0.6")
    .to(".tc4", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

    .to(".boxDescri p", 0,{opacity:"0"})
    .to(".trianguloDesk", 0, {scale:2, opacity:0})
    .to(".boxNumeral", 0, {x:"100px", opacity:0})
    .to(".bordaHome", 0, {width:"0%", opacity:"0"})
    .to(".btnSaiba", 0, {opacity:"0"})

    .to(".bordaT1", 0.5, { height:"0%"})
    .to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
    .to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
    .to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1})
    .to(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:1, opacity:1},"-=1")
    .to(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"0px", opacity:1},"-=0.5")

    .addPause()
    .to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"0px"})
    .to(".bordaHome", 2, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1")
    .to(".boxDescri p", 1.5, {opacity:"1"} ,"-=0.5")
    .to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")









$(window).on('mousewheel',function() {
        tl.play();
	});

$('.bt1').on('click',function() {
        tl.reverse();
  });

$('.menuMob').on('click',function() {
        tl.reverse();
  });


$('.navegador').on('click',function() {
        tl.play();
  });


$('.bt1').on('click',function() {
        tl1.play();
	});

