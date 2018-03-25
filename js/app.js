/////////////////////// SCROLL DOWN

$('.js-scroll-sobre').on('click', function(){
	$('html, body').animate({
		scrollTop: $(".scroll-sobre").offset().top -100
	}, 1000)  
})

$('.js-scroll-galeria').on('click', function(){
	$('html, body').animate({
		scrollTop: $(".scroll-galeria").offset().top -1 
	}, 1000)  
})


$('.js-scroll-profissionais').on('click', function(){
	$('html, body').animate({
		scrollTop: $(".scroll-profissionais").offset().top -1 
	}, 1000)  
})

/////////////////////// SCROLL DOWN

/////////////////////// PROFISSIONAIS

function prof(jspf) {
	var tlPf1 = new TimelineMax()
	.to('.pf-ctn-inner'+jspf, 1.5, {ease: Expo.easeInOut, top:"0vh", autoAlpha: 1})
	.to('.pf-foto-inner', .5, {scale:1.02},"-=.3")
	$('.pf-ctn-fecha').on('click',function() {
		tlPf1.reverse();
	});         
}

$('.p-ctn-prof').click(function(){
	var elClicked = $(this).attr('class').split(' ')[1];
	prof('.'+elClicked);
})

TweenMax.set('.pf-hover-p', {y:10, opacity:0});

function ttt(hover) {
	TweenMax.to( '.pf-hover-1'+hover,.2, {opacity:.8})
	TweenMax.to( '.pf-hover-p' , .8, {y:0, opacity:1})
}

function hhh(hover) {
	TweenMax.to( '.pf-hover-p',.2,{y:10,opacity:0})
	TweenMax.to( '.pf-hover-1'+hover ,.8,{opacity:0})
}

$( ".pf-hover-1").mouseenter(function() {
	var Pfhover = $(this).attr('class').split(' ')[1];
	ttt('.'+Pfhover);
})

$( ".pf-hover-1").mouseleave(function() {
	var Pfhover = $(this).attr('class').split(' ')[1];
	hhh('.'+Pfhover);
})

///////////////////////// PROFISSIONAIS 

///////////////////////// GALERIA 

var count = 0
function galeria(par1) {
	var tlgr1 = new TimelineMax()
	.to('.glr-ctn-foto', .6, { width:"20vw"})
	.to('.glr-geral', 1, {ease: Expo.easeInOut, bottom: count+ "00vh"})
	.to('.glr-ctn-foto', .6, { width:"70vw"})
}

$('.btn1').click(function(){
	galeria('.glr-nav.glr-rgt-30',count++);
	prof2('.glr-nav.glr-rgt-30',count);
})

$('.btn2').click(function(){
	prof('.glr-nav.glr-rgt-30',count--);
	prof2('.glr-nav.glr-rgt-30', count);
})

TweenMax.set('.00vh', {scale: 1.3,backgroundColor: "#000"});
function clickTri(prmt1,prmt2) {
	var tltg1 = new TimelineMax()
	.to('.glr-trigger-cir', .3, { scale: 1, backgroundColor: "transparent"})
	.to('.glr-ctn-foto', .3, { width:"50vw"})
	.to('.glr-geral', 1.2, {ease: Expo.easeInOut, bottom:"-"+prmt2})
	.to('.glr-ctn-foto', .6, {ease: Expo.easeInOut, width:"70vw"})
	.to('.glr-trigger-cir'+prmt1, .6, {scale: 1.3, backgroundColor: "#000"},"-=.8")	 
}

$('.glr-trigger-cir').click(function(){
	var clickTrigger = $(this).attr('class').split(' ')[1];
	clickTri('.'+clickTrigger,clickTrigger);

})

function glrinner(fotovh,fotovw) {
	var tlgrinner1 = new TimelineMax()
	.to('.glr-inner-geral' , 0, {ease: Expo.easeInOut, left: "-"+fotovw})
	.to('.glr-inner', 1.5, {ease: Expo.easeInOut, top:"0vh", autoAlpha: 1})
	

	$('.pf-ctn-fecha').on('click',function() {
		tlgrinner1.reverse();
	});         
}

$('.glr-foto').click(function(){
	var clickfoto = $(this).attr('class').split(' ')[1];
	glrinner('.'+clickfoto, clickfoto);
})

///////////////////////// GALERIA


///////////////////////// ARROW ANIMAÇÃO ABRE

var tlarrow = new TimelineMax({repeat:100})
tlarrow.fromTo('.arrow-down' , 1, {ease: Expo.easeInOut, y:-6}, {ease: Expo.easeInOut, y:4})
.to('.arrow-down' , .3, {y:-6}) 

$( ".btnSaiba" ).mouseenter(function() {
  var tlsaiba = new TimelineMax()
	.to('.js-h-rgt' , 0.4, {ease: Expo.easeInOut, x: 40, opacity:0})
	.to('.js-h-rgt' , 0, {x:-10})
	.to('.js-h-rgt' , 0.4, {x: 0, opacity:0.8})
});

$( ".navegador" ).mouseenter(function() {
  var tlnav = new TimelineMax()
	.to('.mg-lf-1' , 0.4, {ease: Expo.easeInOut, y: 40, opacity:0})
	.to('.mg-lf-1' , 0, {y:-40})
	.to('.mg-lf-1' , 0.4, {y: 0, opacity:0.8})
});

///////////////////////// ARROW ANIMAÇÃO FECHA

///////////////////////// HOME ABRE

var tl1 = new TimelineLite();
tl1
.addPause()
.to(".bordaT1", 0.4, { height:"100%"})
.to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
.to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
.to(".bordaL1", 0.4, { width:"100%"},"-=0.4")

.to(".lt1", 0.5, { width:"0%"},"-=0.5")
.to(".tc1", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5")  	

.to(".ctnCentral", 1.2, {ease: Expo.easeInOut, y:"300px", opacity:0},"-=0.1")
.to(".main", 1.5, {ease: Expo.easeInOut, top:"-100vh"},"-=0.7")

.to(".lt2", 0.5, { width:"100%"},"-=1")
.to(".tc2", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")

.to(".bordaT1", 0.5, { height:"0%"})
.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
.from(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
.from(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7");

var tl2 = new TimelineLite();
tl2
.addPause()
.to(".foto2", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px", opacity:1},"-=1")
.to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".3"},"-=1.1")
.to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
.to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")

.addPause()
.to(".bordaT1", 0.5, { height:"100%"})
.to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

.to(".lt2", 0.5,  { width:"0%"},"-=0.3")
.to(".tc2", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")

.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0},"-=1")
.to(".main", 1.5, {ease: Expo.easeInOut, top:"-200vh"},"-=0.5")

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
.to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3");

var tl3 = new TimelineLite({paused: true});
tl3
.to(".foto3", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })

.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"},"-=1.1")
.to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
.to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
.to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")

.addPause()
.to(".bordaT1", 0.5, { height:"100%"})
.to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

.to(".lt3", 0.5,  { width:"0%"},"-=0.3")
.to(".tc3", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")

.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
.to(".main", 1.5, {ease: Expo.easeInOut, top:"-300vh"},"-=0.5")

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
.to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3"); 

var tl4 = new TimelineLite({paused: true});
tl4

.to(".foto4", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"},"-=1.1")
.to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
.to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
.to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3")

.addPause()
.to(".bordaT1", 0.5, { height:"100%"})
.to(".bordaR1", 0.5, { width:"100%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"100%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"100%"},"-=0.5")

.to(".lt4", 0.5,  { width:"0%"},"-=0.3")
.to(".tc4", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.3")

.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"300px", opacity:0})
.to(".main", 1.5, {ease: Expo.easeInOut, top:"-400vh"},"-=0.5")

.to(".lt5", 0.5, { width:"100%"},"-=0.6")
.to(".tc5", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=0.6")

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
.to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3");

var tl5 = new TimelineLite({paused: true});
tl5

.to(".foto5", 1, {ease: Expo.easeInOut, backgroundPosition: "bottom" })
.to(".ctnCentral", 1, {ease: Expo.easeInOut, y:"0px"},"-=1.1")
.to(".bordaHome", 2.5, {ease: Expo.easeInOut, width:"100%", opacity:".5"},"-=1.1")
.to(".boxDescri p", 1.5, {opacity:"1"},"-=0.3")
.to(".btnSaiba", 0.5, {opacity:"1"},"-=0.3");

var tl6 = new TimelineLite({paused: true});
tl6

.to(".bordaT1", 0.4, { height:"100%"})
.to(".bordaR1", 0.4, { width:"100%"},"-=0.4")
.to(".bordaB1", 0.4, { height:"100%"},"-=0.4")
.to(".bordaL1", 0.4, { width:"100%"},"-=0.4")

.to(".lt1", 0.5, { width:"0%"},"-=0.5")
.to(".tc1", 0.5, { scale:1, backgroundColor:"transparent"},"-=0.5")     

.to(".ctnCentral", 1.2, {ease: Expo.easeInOut, y:"300px", opacity:0},"-=0.1")
.to(".main", 1.5, {ease: Expo.easeInOut, top:"-100vh"},"-=0.7")

.to(".lt2", 0.5, { width:"100%"},"-=1")
.to(".tc2", 0.5, { scale:1.7, backgroundColor:"#fff"},"-=1")

.to(".bordaT1", 0.5, { height:"0%"})
.to(".bordaR1", 0.5, { width:"0%"},"-=0.5")
.to(".bordaB1", 0.5, { height:"0%"},"-=0.5")
.to(".bordaL1", 0.5, { width:"0%"},"-=0.5")
.to(".ctnCentral", 1.5, {ease: Expo.easeInOut, y:"250px", opacity:1},"-=1")
.from(".trianguloDesk", 1.5, {ease: Expo.easeInOut, scale:2, opacity:0},"-=1")
.from(".boxNumeral", 1.5, {ease: Expo.easeInOut, x:"100px", opacity:0},"-=0.7");


$('.tm1').on('mousewheel click',function() {
	tl1.play();
});


$('.tm2').on('mousewheel click',function() {
	tl2.play();
});

$('.bt2').on('click',function() {
	tl6.play();
});


$('.tm3').on('mousewheel click',function() {
	tl3.play();
});


$('.tm4').on('mousewheel click',function() {
	tl4.play();
});


$('.tm5').on('mousewheel click',function() {
	tl5.play();
});

///////////////////////// HOME ABRE