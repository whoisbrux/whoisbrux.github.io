	TweenMax.to(".logoMob", 0, {opacity: "0"});
	TweenMax.to(".linkMenu", 0, {opacity: "0"});
	TweenMax.to(".home .button", 0, {bottom:"-50px", opacity: "0"});

	TweenMax.to(".intro", 1, {backgroundColor:"#fff"});
	TweenMax.to(".bordaLogo1", 1.5, {delay:1,width:"100%",opacity:1});
	TweenMax.to(".bordaLogo2", 1.5, {delay:2,height:"100%", opacity:1});
	TweenMax.to(".bordaLogo3", 1.5, {delay:1,width:"100%", opacity:1});
	TweenMax.to(".bordaLogo4", 1.5, {delay:2,height:"100%", opacity:1});
	TweenMax.to(".backLogo", 1.5, {delay:3.5, ease: Expo.easeInOut, bottom:"0px",opacity:1});
	TweenMax.to(".cortina", 0, { delay:5, opacity:1});
	TweenMax.to(".cortina", 2, { delay:5.1, ease: Expo.easeOut, width:"100%", height:"100%"});	
	TweenMax.to(".logoMobAnime", 1, {delay:7, opacity:.0});
	TweenMax.to(".logoMobAnime", 0, {delay:3.5, color: "#fff"});
	TweenMax.to(".intro", 3, {delay:7, opacity:.0});
	TweenMax.to(".textoHome", 1.5, {delay:8.5, y: "-200px", opacity: "1"});
	TweenMax.to(".logoMob", 1, {delay:10, opacity: "1"});
	TweenMax.to(".linkMenu", 1, {delay:10, opacity: "1"});
	TweenMax.to(".home .button", 2, {delay: 10.5,ease: Expo.easeInOut, bottom:"3vh", opacity: "1"});
	TweenMax.to(".intro", 0, {delay:11.5, display:"none"});


	TweenMax.to(".photoSlider", 0, {ease: Expo.easeInOut, right:"-20vw", opacity: "0"});

		var tl = new TimelineLite();
  	tl
  	tl.pause()
  	.to(".main", 1.5, {ease: Expo.easeInOut, top:"-100vh"}) 
    .to(".photoSlider", 1, {ease: Power1.easeInOut, right:"0vw", opacity: "1"});
	
	$('.home .button').on('click',function() {
        tl.play();
	});

	$('.logoMob').on('click',function() {
        tl.reverse();
	});







