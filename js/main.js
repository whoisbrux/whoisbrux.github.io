$(".box-menu").click(function() {
    //TweenMax.to(".holder-faixa", 3, {ease: Expo.easeOut, width: "100vw"});
  });



  var tlIntro = new TimelineMax()   
  .to(".black-curtain", 1.5, {ease: Expo.easeInOut, width:0})
  //.from(".bg-1", .6, {y: 300, autoAlpha: 0})
  .from(".barra-1", 1, {ease: Power4.easeInOut, xPercent:50, yPercent:-50, autoAlpha: 0},"-=.4")
  .from(".barra-2", 1, {ease: Power4.easeInOut, xPercent:-50, yPercent:+50, autoAlpha: 0},"-=.5")

  .from(".holder-1 .box-prime", 1.5, {ease: Power4.easeInOut, y: -50, autoAlpha: 0},"-=.5")




$('.holder-1').mousemove(function(e){
  parallaxIt(e, '.barra-1', -30);
  parallaxIt(e, '.barra-2', -30);
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




  var tl1 = new TimelineMax({paused: true})   
  .to(".holder-1", 1.5, {ease: Expo.easeInOut, width:0})
  .from(".modelo-1", 1, {ease: Power4.easeInOut, y: -100, autoAlpha: 0},"-=.7")
  .from(".holder-faixa", 1.5, {ease: Expo.easeOut, width: 0},"-=.1")
  

  
  





  $(".js-nav-1 .p-nav, .box-menu").click(function() {
    tl1.play();
  });


 

