// ---------------- TimeLine intro Home ------------------ //  

TweenMax.set(".load-bg-1",{scaleX:0}) 
TweenMax.set(".load-bg-2",{scaleX:0}) 
TweenMax.set(".js-intro-2",{autoAlpha:0}) 
TweenMax.set(".js-intro-3",{autoAlpha:0}) 
TweenMax.set(".js-intro-4",{autoAlpha:0}) 

var tlIntro2 = new TimelineMax() 

.from(".fast-curtain", .5, {backgroundColor:"#fff"}) 
.to(".fast-curtain", .5, {autoAlpha:0})  

.to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
.to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

.set(".js-intro-1",{autoAlpha:0})
.set(".js-intro-2",{autoAlpha:1})

.to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
.to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

.set(".js-intro-2",{autoAlpha:0})
.set(".js-intro-3",{autoAlpha:1})

.to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
.to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

.set(".js-intro-3",{autoAlpha:0})
.set(".js-intro-4",{autoAlpha:1})

.to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
.to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

.set(".js-intro-4",{autoAlpha:0})

.to(".black-curtain", 1.2, {ease: Expo.easeInOut, scaleX:0 , transformOrigin:'right top'},"-=.3") 

.from(".barra-1", 1, {ease: Power4.easeInOut, xPercent:50, yPercent:-50, autoAlpha: 0},"-=.4")
.from(".barra-2", 1, {ease: Power4.easeInOut, xPercent:-50, yPercent:+50, autoAlpha: 0},"-=.5")
.from(".holder-1 .box-prime", 1.5, {ease: Power4.easeInOut, y: -50, autoAlpha: 0},"-=.5");


// ---------------- TimeLine 1 ------------------ // 

  $(".js-nav-1 .p-nav, .viston-logo").click(function() {
    var tl1 = new TimelineMax()

    .to(".black-curtain", 1.1, {ease: Expo.easeInOut, scaleX:1 , transformOrigin:'left top'},0)

    .to(".line-full", .5, {backgroundColor: "#fff"},0)
    .to(".scroll-1", 1, {autoAlpha: 1},0) 
    .to(".line-scroll", 1, {backgroundColor: "#fff"},0)

    .to(".viston-logo", 1, {color: "#fff"},0)  
    .to(".number-nav", 1, {color: "#585858"},0)

    .to(".number-border", 1, {background: "#585858"},0)  
    .to(".js-nav-1 .number-border", .2, {background:"#7cdf00"},0)
    .to(".js-nav-1 .number-nav", .2, {color:"#7cdf00"},0)
  
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

    .set(".holder-1",{zIndex: 3})

    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

    .set(".holder-2",{zIndex: 1,})
    .set(".holder-3",{zIndex: 1,})
    .set(".holder-4",{zIndex: 1,})
    .set(".holder-1",{zIndex: 2})
  
    .to(".black-curtain", 1.2, {ease: Expo.easeInOut, scaleX:0 , transformOrigin:'right top'},"-=.3")  

    .from(".barra-1", 1, {ease: Power4.easeInOut, xPercent:50, yPercent:-50, autoAlpha: 0},"-=.4")
    .from(".barra-2", 1, {ease: Power4.easeInOut, xPercent:-50, yPercent:+50, autoAlpha: 0},"-=.5")
    .from(".holder-1 .box-prime", 1.5, {ease: Power4.easeInOut, y: -50, autoAlpha: 0},"-=.5")


  });









  // ---------------- TimeLine 2 ------------------ // 

  $(".js-nav-2 .p-nav").click(function() {
    var tl2 = new TimelineMax() 

    .to(".black-curtain", 1.1, {ease: Expo.easeInOut, scaleX:1 , transformOrigin:'left top'},0)

    .to(".line-full", .5, {backgroundColor: "#fff"},0)
    .to(".scroll-1", 1, {autoAlpha: 1},0) 
    .to(".line-scroll", 1, {backgroundColor: "#fff"},0)

    .to(".viston-logo", 1, {color: "#494949"},0)  
    .to(".number-nav", 1, {color: "#585858"},0)

    .to(".number-border", 1, {background: "#585858"},0)  
    .to(".js-nav-2 .number-border", .2, {background:"#7cdf00"},0)
    .to(".js-nav-2 .number-nav", .2, {color:"#7cdf00"},0)
  
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

    .set(".holder-2",{zIndex: 3})

    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

    .set(".holder-1",{zIndex: 1})
    .set(".holder-3",{zIndex: 1})
    .set(".holder-4",{zIndex: 1})
    .set(".holder-2",{zIndex: 2})
  
    .to(".black-curtain", 1.2, {ease: Expo.easeInOut, scaleX:0 , transformOrigin:'right top'},"scroll2")

    .to(".scroll-1", 1, {autoAlpha: 0},"scroll2" ) 
    .to(".line-scroll", 1, {backgroundColor: "#000"},"scroll2" ) 
    .to(".line-full", .5, {delay: .6, backgroundColor: "#000"},"scroll2")
  
  
    .from(".modelo-1", 1, {ease: Power4.easeInOut, y: -100, autoAlpha: 0},"-=.8")
    .from(".holder-faixa", 1.5, {ease: Expo.easeOut, width: 0},"-=.2")
    .from(".holder-2 .box-prime", 1, {ease: Power4.easeInOut, y: -50, autoAlpha: 0},"-=1")

  });








  // ---------------- TimeLine 3 ------------------ // 

  $(".js-nav-3 .p-nav").click(function() {
    var tl3 = new TimelineMax() 

    .to(".black-curtain", 1.1, {ease: Expo.easeInOut, scaleX:1 , transformOrigin:'left top'},0)

    .to(".line-full", .5, {backgroundColor: "#fff"},0)
    .to(".scroll-1", 1, {autoAlpha: 1},0) 
    .to(".line-scroll", 1, {backgroundColor: "#fff"},0)

    .to(".viston-logo", 1, {color: "#fff"},0)  
    .to(".number-nav", 1, {color: "#585858"},0)

    .to(".number-border", 1, {background: "#585858"},0)  
    .to(".js-nav-3 .number-border", .2, {background:"#7cdf00"},0)
    .to(".js-nav-3 .number-nav", .2, {color:"#7cdf00"},0)
  
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

    .set(".holder-3",{zIndex: 3})

    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'}) 

    .set(".holder-1",{zIndex: 1})
    .set(".holder-2",{zIndex: 1})
    .set(".holder-4",{zIndex: 1})
    .set(".holder-3",{zIndex: 2}) 

    .to(".black-curtain", 1.2, {ease: Expo.easeInOut, scaleX:0 , transformOrigin:'right top'})  
  
    .from(".modelo-2", 1, {ease: Power4.easeInOut, y: -100, autoAlpha: 0},"-=.8")
    .from(".holder-3 .box-prime", 1, {ease: Power4.easeInOut, y: -50, autoAlpha: 0},"-=.8")
  });











  // ---------------- TimeLine 4 ------------------ // 

  $(".js-nav-4 .p-nav").click(function() {
    var tl4 = new TimelineMax() 

    .to(".black-curtain", 1.1, {ease: Expo.easeInOut, scaleX:1 , transformOrigin:'left top'},0)

    .to(".line-full", .5, {backgroundColor: "#fff"},0)
    .to(".scroll-1", 1, {autoAlpha: 1},0) 
    .to(".line-scroll", 1, {backgroundColor: "#fff"},0)

    .to(".viston-logo", 1, {color: "#494949"},0)  
    .to(".number-nav", 1, {color: "#585858"},0)

    .to(".number-border", 1, {background: "#585858"},0)  
    .to(".js-nav-4 .number-border", .2, {background:"#7cdf00"},0)
    .to(".js-nav-4 .number-nav", .2, {color:"#7cdf00"},0)
  
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-1", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

    .set(".holder-4",{zIndex: 3})

    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:1, transformOrigin:'left top'})    
    .to(".load-bg-2", .6, {ease: Expo.easeInOut, scaleX:0, transformOrigin:'right top'})

    .set(".holder-1",{zIndex: 1})
    .set(".holder-2",{zIndex: 1})
    .set(".holder-3",{zIndex: 1})
    .set(".holder-4",{zIndex: 2}) 
  
    .to(".black-curtain", 1.2, {ease: Expo.easeInOut, scaleX:0 , transformOrigin:'right top'},"scroll4")

    .to(".scroll-1", 1, {autoAlpha: 0},"scroll4" ) 
    .to(".line-scroll", 1, {backgroundColor: "#000"},"scroll4" ) 
    .to(".line-full", .5, {delay: .6, backgroundColor: "#000"},"scroll4")  
  
    .from(".modelo-3", 1, {ease: Power4.easeInOut, y: 100, autoAlpha: 0})
    .from(".holder-faixa-2", 1.5, {ease: Expo.easeOut, width: 0},"-=.2")
    .from(".holder-4 .box-prime", 1, {ease: Power4.easeInOut, y: -50, autoAlpha: 0},"-=.8")
  });








  // ---------------- Parallax Slider 1 ------------------ // 

$('.holder-1').mousemove(function(e){
  parallaxIt(e, '.barra-1', -20);
  parallaxIt(e, '.barra-2', 20);
});

function parallaxIt(e, target, movement){
  var $this = $('.holder-1');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  
  TweenMax.to(target, 1, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement
  })
}  

var animating = false;

   $(".box-nav").hover(function() {
    var navClass2 = $(this).attr("class").split(" ")[1];
    var tlNav = new TimelineMax()    
      .to("."+navClass2+" .number-nav", .4, {y: -15, autoAlpha: 0},0)
      .to("."+navClass2+" .p-box", .5, {ease: Expo.easeInOut, width: "100%" },0)
      .fromTo("."+navClass2+" .p-nav", .3, { y: 25, autoAlpha: 0},{ y: 0, autoAlpha: 1},"-=.3")
  },  
  function() {   
    var navClass2 = $(this).attr("class").split(" ")[1];
    var tlNav = new TimelineMax()    
    .to(".p-box", .3, { width: 0},0)
    .to("."+navClass2+" .number-nav", .4, { y: 0, autoAlpha: 1,})  
    
  }); 