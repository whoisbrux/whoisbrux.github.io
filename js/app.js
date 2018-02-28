	TweenMax.to(".bordaT", 0,{height: "0"});
	TweenMax.to(".bordaR",0, {width: "0"});
	TweenMax.to(".bordaB",0, {height: "0"});
	TweenMax.to(".bordaL",0, {width: "0"});
	TweenMax.to(".footer",0, {opacity: "0"});
	TweenMax.to(".logo",0, {y:100, opacity: "0"});
	TweenMax.to(".tituloContato",0, {y:100,opacity: "0"});	
	TweenMax.to(".ctnContato",0, {y:100,opacity: "0"});
	TweenMax.to(".emBreve",0, {y:100,opacity: "0"});	
	TweenMax.to(".bgPrime",0, {scaleX:1.3, scaleY:1.3, opacity:0});

var tl = new TimelineLite();
  	tl
		  .to(".bgPrime", 3, {scaleX:1.0, scaleY:1.0, opacity:1})
		  .to(".bordaT", 2,{height: "80px"},"-=2")
			.to(".bordaR", 2,{width: "80px"},"-=2")
			.to(".bordaB", 2,{height: "80px"},"-=2")		
			.to(".bordaL", 2,{width: "80px"},"-=2")	
			.to(".logo",2, {y:0, opacity: "1.0"},"-=1")
			.to(".tituloContato",2, {y:0,opacity: "1.0"},"-=1")	
			.to(".ctnContato",2, {y:0,opacity: "1.0"},"-=1")
			.to(".emBreve",2, {y:0,opacity: "1.0"},"-=1")
			.to(".footer",2, {opacity: "1.0"},"-=1");