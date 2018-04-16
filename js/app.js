 


/* MENU MODAL */
var tLmodalMenu = new TimelineMax({ paused: true });
$itemsli = $(".menu-modal li");
tLmodalMenu
  .to(".menuMob", 0.6, { ease: Expo.easeInOut, scale: 2, autoAlpha: 0 })
  .from(".menu-modal", 1,{ ease: Expo.easeInOut, x: "-100%", autoAlpha: 0 },"-=.5")
  .staggerFrom($itemsli,1, {delay: 0.1,autoAlpha: 0, y: 50,ease: Elastic.easeOut.config(0.5, 0.75) }, 0.1,"-=.5")
  .from(".menu-modal buttom.pf-botao", 0.6, { ease: Expo.easeInOut, scale: 2, autoAlpha: 0 },"-=1.3");

$(".menuMob, .trigger-modal").click(function() {
  tLmodalMenu.play();
});

$(".menu-modal buttom.pf-botao").click(function() {
  tLmodalMenu.reverse();
});

/////////////////////// SCROLL DOWN

  $(".i-banner").on("click", function() {
    $("html, body").animate({scrollTop: $(".js-teste").offset().top - 1 }, 1000);});

/////////////////////// SCROLL DOWN

/////////////////////// PROFISSIONAIS

function prof(jspf) {
  var tlPf1 = new TimelineMax()
    .to(".pf-ctn-inner" + jspf, 1.2, { ease: Expo.easeInOut,top: "0vh", autoAlpha: 1})
    .to(".pf-foto-inner", 0.5, { scale: 1.02 }, "-=.3");
 
     $(".pf-ctn-fecha").on("click", function() {
    tlPf1.reverse();
  });
}

$(".p-ctn-prof").click(function() {
  var elClicked = $(this).attr("class").split(" ")[1];
  prof("." + elClicked);
});

TweenMax.set(".pf-hover-p", { y: 10, opacity: 0 });

function ttt(hover) {
  TweenMax.to(".pf-hover-1" + hover, 0.2, { opacity: 0.8 });
  TweenMax.to(".pf-hover-p", 0.8, { y: 0, opacity: 1 });
}

function hhh(hover) {
  TweenMax.to(".pf-hover-p", 0.2, { y: 10, opacity: 0 });
  TweenMax.to(".pf-hover-1" + hover, 0.8, { opacity: 0 });
}

$(".pf-hover-1").mouseenter(function() {
  var Pfhover = $(this).attr("class").split(" ")[1];
  ttt("." + Pfhover);
});

$(".pf-hover-1").mouseleave(function() {
  var Pfhover = $(this).attr("class").split(" ")[1];
  hhh("." + Pfhover);
});

///////////////////////// PROFISSIONAIS

///////////////////////// GALERIA

var count = 0;
function galeria(par1) {
  var tlgr1 = new TimelineMax()
    .to(".glr-ctn-foto", 0.6, { width: "20vw" })
    .to(".glr-geral", 1, { ease: Expo.easeInOut, bottom: count + "00vh" })
    .to(".glr-ctn-foto", 0.6, { width: "70vw" });
}

$(".btn1").click(function() {
  galeria(".glr-nav.glr-rgt-30", count++);
  prof2(".glr-nav.glr-rgt-30", count);
});

$(".btn2").click(function() {
  prof(".glr-nav.glr-rgt-30", count--);
  prof2(".glr-nav.glr-rgt-30", count);
});

TweenMax.set(".00vh", { scale: 1.3, backgroundColor: "#000" });
function clickTri(prmt1, prmt2) {
  var tltg1 = new TimelineMax()
    .to(".glr-trigger-cir", 0.3, { scale: 1, backgroundColor: "transparent" })
    .to(".glr-ctn-foto", 0.3, { width: "50vw" })
    .to(".glr-geral", 1.2, { ease: Expo.easeInOut, bottom: "-" + prmt2 })
    .to(".glr-ctn-foto", 0.6, { ease: Expo.easeInOut, width: "70vw" })
    .to(".glr-trigger-cir" + prmt1, 0.6,{ scale: 1.3, backgroundColor: "#000" },"-=.8");
}

$(".glr-trigger-cir").click(function() {
  var clickTrigger = $(this) .attr("class") .split(" ")[1];
  clickTri("." + clickTrigger, clickTrigger);
});

function glrinner(fotovh, fotovw) {
  var tlgrinner1 = new TimelineMax()
    .to(".glr-inner-geral", 0, { ease: Expo.easeInOut, left: "-" + fotovw })
    .to(".glr-inner", 1.5, { ease: Expo.easeInOut, top: "0vh", autoAlpha: 1 });

  $(".pf-ctn-fecha").on("click", function() {
    tlgrinner1.reverse();
  });
}

$(".glr-foto").click(function() {
  var clickfoto = $(this).attr("class").split(" ")[1];
  glrinner("." + clickfoto, clickfoto);
});

///////////////////////// GALERIA

///////////////////////// ARROW ANIMAÇÃO ABRE

var tlarrow = new TimelineMax({
  onComplete: function() {
    tlarrow
      .fromTo(".arrow-down", 0.2,{ ease: Expo.easeIn, y: -10 },{ ease: Expo.easeIn, y: 12 })
      .to(".arrow-down", 1, { y: -10 });
    this.restart();
  }
});

$(".btnSaiba, .btn-home").mouseenter(function() {
  var tlsaiba = new TimelineMax()
    .to(".js-h-rgt", 0.4, { ease: Expo.easeInOut, x: 40, opacity: 0 })
    .to(".js-h-rgt", 0, { x: -10 })
    .to(".js-h-rgt", 0.4, { x: 0, opacity: 0.8 });
});

$(".navegador, .home-nav-1, .btn-home-2").mouseenter(function() {
  var tlnav = new TimelineMax()
    .to(".mg-lf-1", 0.4, { ease: Expo.easeInOut, y: 40, opacity: 0 })
    .to(".mg-lf-1", 0, { y: -40 })
    .to(".mg-lf-1", 0.4, { y: 0, opacity: 0.8 });
});

///////////////////////// ARROW ANIMAÇÃO FECHA


/////////////////////// HOME
var tl1 = new TimelineLite();
tl1
  .addPause()
  .to(".js-holder-1 .half-box", 0.8, {autoAlpha: 0 },"juntosTrans1")  
  .to(".js-holder-1", 0.8, {height: 0 },"-=.3")
  
  .from(".nav-home", 1, { autoAlpha:0 },"juntoBorda2")

  .to(".lt1", 0.5, { width: "100%" },"juntoBorda2")
  .to(".tc1", 0.5, { scale: 1.7, backgroundColor: "#fff" },"juntoBorda2")
  
  .fromTo(".js-holder-2 .js-h1-1", 0.4, {y:180, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda2")
  .fromTo(".js-holder-2 .js-h1-2", 0.4, {y:220, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda2")
  .fromTo(".js-holder-2 .travel-numbers", 0.4, {y:150, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda2")  

  .from(".js-holder-2 .slider-triangle-2", .5,{ scale:2 , autoAlpha:0},"juntoBorda2")
  .from(".js-holder-2 .slider-number", 1,{ y:-30 , autoAlpha:0},"juntoBorda2")
  .from(".js-holder-2 .name-page", 1,{ y:30 , autoAlpha:0},"juntoBorda2")



  ////////// slider 2
  .addPause()

  .to(".js-holder-2 .js-h1-1", .7, {ease: Power2.easeInOut,  y:0},"bg1")
  .to(".js-holder-2 .js-h1-2", .7, {ease: Power2.easeInOut,  y:0},"-=.6","bg1")
  .to(".js-holder-2 .travel-numbers", 0.7, {y:0},"-=.6")
  //.to(".home-slider-2", .5, {backgroundPosition: "bottom"},"bg1")

   

  .from(".js-holder-2 .home-border", .5,{width:0, autoAlpha:0})
  .from(".js-holder-2 .home-prgf", .5,{ autoAlpha:0})
  .from(".js-holder-2 .btn-home", .8,{ autoAlpha:0})

  .addPause()

  .to(".js-holder-2 .half-box", 0.8, {autoAlpha: 0 },"juntosTrans3")  
  .to(".js-holder-2", 0.8, {height: 0 },"-=.3")

  .to(".holder-navegador", 0.7, { y: -20 },"juntosTrans3")
  .to(".lt1", 0.5, { width: "0" },"juntosTrans3")
  .to(".tc1", 0.5, { scale: 1, backgroundColor: "transparent" },"juntosTrans3")
  .to(".lt2", 0.5, { width: "100%" },"juntosTrans3")
  .to(".tc2", 0.5, { scale: 1.7, backgroundColor: "#fff" },"juntosTrans3")

  .fromTo(".js-holder-3 .js-h1-1", 0.4, {y:180, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda4")
  .fromTo(".js-holder-3 .js-h1-2", 0.4, {y:220, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda4")
  .fromTo(".js-holder-3 .travel-numbers", 0.4, {y:150, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda4")  

  .from(".js-holder-3 .slider-triangle-2", .5,{ scale:2 , autoAlpha:0},"juntoBorda4")
  .from(".js-holder-3 .slider-number", 1,{ y:-30 , autoAlpha:0},"juntoBorda4")
  .from(".js-holder-3 .name-page", 1,{ y:30 , autoAlpha:0},"juntoBorda4")

    ////////// slider 3
    .addPause()

    .to(".js-holder-3 .js-h1-1", .7, {ease: Power2.easeInOut,  y:0})
    .to(".js-holder-3 .js-h1-2", .7, {ease: Power2.easeInOut,  y:0},"-=.6")
    .to(".js-holder-3 .travel-numbers", 0.7, {y:0},"-=.6")  
  
    .from(".js-holder-3 .home-border", .5,{width:0, autoAlpha:0})
    .from(".js-holder-3 .home-prgf", .5,{ autoAlpha:0})
    .from(".js-holder-3 .btn-home", .8,{ autoAlpha:0})

    .addPause()
  
    .to(".js-holder-3 .half-box", 0.8, {autoAlpha: 0 },"juntosTrans5")  
    .to(".js-holder-3", 0.8, {height: 0 },"-=.3")  

    .to(".holder-navegador", 0.7, { y: -40 },"juntosTrans5")
    .to(".lt2", 0.5, { width: "0" },"juntosTrans5")
    .to(".tc2", 0.5, { scale: 1, backgroundColor: "transparent" },"juntosTrans5")
    .to(".lt3", 0.5, { width: "100%" },"juntosTrans5")
    .to(".tc3", 0.5, { scale: 1.7, backgroundColor: "#fff" },"juntosTrans5")
  
    .fromTo(".js-holder-4 .js-h1-1", 0.4, {y:180, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda6")
    .fromTo(".js-holder-4 .js-h1-2", 0.4, {y:220, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda6")
    .fromTo(".js-holder-4 .travel-numbers", 0.4, {y:150, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda6")  
  
    .from(".js-holder-4 .slider-triangle-2", .5,{ scale:2 , autoAlpha:0},"juntoBorda6")
    .from(".js-holder-4 .slider-number", 1,{ y:-30 , autoAlpha:0},"juntoBorda6")
    .from(".js-holder-4 .name-page", 1,{ y:30 , autoAlpha:0},"juntoBorda6")
    
    ////////// slider 4

    .addPause()

    .to(".js-holder-4 .js-h1-1", .7, {ease: Power2.easeInOut,  y:0})
    .to(".js-holder-4 .js-h1-2", .7, {ease: Power2.easeInOut,  y:0},"-=.6")
    .to(".js-holder-4 .travel-numbers", 0.7, {y:0},"-=.6")  
  
    .from(".js-holder-4 .home-border", .5,{width:0, autoAlpha:0})
    .from(".js-holder-4 .home-prgf", .5,{ autoAlpha:0})
    .from(".js-holder-4 .btn-home", .8,{ autoAlpha:0})

    .addPause()
  
    .to(".js-holder-4 .half-box", 0.8, {autoAlpha: 0 },"juntosTrans7")  
    .to(".js-holder-4", 0.8, {height: 0 },"-=.3") 

    .to(".holder-navegador", 0.7, { y: -60 },"juntosTrans7")
    .to(".lt3", 0.5, { width: "0" },"juntosTrans7")
    .to(".tc3", 0.5, { scale: 1, backgroundColor: "transparent" },"juntosTrans7")
    .to(".lt4", 0.5, { width: "100%" },"juntosTrans7")
    .to(".tc4", 0.5, { scale: 1.7, backgroundColor: "#fff" },"juntosTrans7")
  
    .fromTo(".js-holder-5 .js-h1-1", 0.4, {y:180, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda8")
    .fromTo(".js-holder-5 .js-h1-2", 0.4, {y:220, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda8")
    .fromTo(".js-holder-5 .travel-numbers", 0.4, {y:150, autoAlpha:0}, {y:200, autoAlpha:1},"juntoBorda8")  
  
    .from(".js-holder-5 .slider-triangle-2", .5,{ scale:2 , autoAlpha:0},"juntoBorda8")
    .from(".js-holder-5 .slider-number", 1,{ y:-30 , autoAlpha:0},"juntoBorda8")
    .from(".js-holder-5 .name-page", 1,{ y:30 , autoAlpha:0},"juntoBorda8")

     ////////// slider 4
    .addPause()

    .to(".js-holder-5 .js-h1-1", .7, {ease: Power2.easeInOut,  y:0})
    .to(".js-holder-5 .js-h1-2", .7, {ease: Power2.easeInOut,  y:0},"-=.6")
    .to(".js-holder-5 .travel-numbers", 0.7, {y:0},"-=.6","juntosTrans10")  
  
    .to(".holder-navegador", 0.7, { y: -80 },"juntosTrans10")
    .to(".nav-home .mg-lf-1", 0.5, { autoAlpha: 0 },"juntosTrans10")
    .from(".nav-home .js-h-rgt-2", 0.5, { autoAlpha: 0 },"juntosTrans10")

    .from(".js-holder-5 .home-border", .5,{width:0, autoAlpha:0})
    .from(".js-holder-5 .home-prgf", .5,{ autoAlpha:0})
    .from(".js-holder-5 .btn-home", .8,{ autoAlpha:0}) 



$(".js-click-home, .home-nav-1, .btn-home-2").on("click", function() {
  tl1.play();
});

$(window).bind("mousewheel DOMMouseScroll", function(event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    tl1.reverse();   
  } else {
    tl1.play();   
  }
});

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
    } else {
    }
  } else {
    if (yDiff > 0) {
      tl1.play(); /* UP swipe */
    } else {
      tl1.reverse(); /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

///////////// NOT.JS
var lengPhotos = $(".ctn-slide-lightbox .photo-trg").length,
  wScreen = $(window).width(),
  $holderLb = $(".holder-slide-lightbox"),
  time = 1,
  $boxPhotoTrigger = $(".box-foto-galeria"),
  $ctnLightBox = $(".ctn-slide-lightbox"),
  myEase = Power3.easeInOut,
  animating = false;

TweenMax.set($holderLb, { width: wScreen * lengPhotos });

TweenMax.set($ctnLightBox, { autoAlpha: 0 });



function notAnime() {
  animating = false;
}

var bp1 = $(".bp1"), //primeiro BoxPhoto
  lastBp = $(".bp" + lengPhotos), //ultimo box-photo
  count; //contador

function lightbox(photoLb) {
  TweenMax.set($holderLb, { x: -wScreen * (photoLb - 1) });

  var tlLightBox = new TimelineMax()

    .fromTo(
      $ctnLightBox,
      time * 1.6,
      { autoAlpha: 0, yPercent: 100 },
      { yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut }
    )

    .fromTo(
      $holderLb.find(".photo-trg"),
      time * 2,
      { autoAlpha: 0, scale: 1.2 },
      { autoAlpha: 1, scale: 1, ease: Power4.easeOut },
      "-=.3"
    );

  count = photoLb;

  $(document).keyup(function(e) {
    if (e.keyCode == 27 && !animating) {
      // tecla Esc

      TweenMax.to($ctnLightBox, 2, { autoAlpha: 0 });
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 37 && !animating && !bp1.hasClass("active")) {
      // tecla Left

      count--;

      $(".box-photo-galeria-lb").removeClass("active");

      $(".ctn-slide-lightbox .bp" + count).addClass("active");

      TweenMax.to($holderLb, time, {
        x: "+=" + wScreen,
        ease: myEase,
        onComplete: notAnime
      });
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 39 && !animating && !lastBp.hasClass("active")) {
      // tecla Right
      animating = true;
      count++;
      $(".box-photo-galeria-lb").removeClass("active");
      $(".ctn-slide-lightbox .bp" + count).addClass("active");
      TweenMax.to($holderLb, time, {x: "-=" + wScreen,ease: myEase, onComplete: notAnime });
    }
  });

  $(".lightbox-navegador.left-arrow").click(function() {
    if (!animating && !bp1.hasClass("active")) {
      // tecla Left
      animating = true;
      count--;
      $(".box-photo-galeria-lb").removeClass("active");
      $(".ctn-slide-lightbox .bp" + count).addClass("active");
      TweenMax.to($holderLb, time, {x: "+=" + wScreen, ease: myEase, onComplete: notAnime});
    }
  });

  $(".lightbox-navegador.right-arrow").click(function() {
    if (!animating && !lastBp.hasClass("active")) {
      // tecla Right
      animating = true;
      count++;
      $(".box-photo-galeria-lb").removeClass("active");
      $(".ctn-slide-lightbox .bp" + count).addClass("active");
      TweenMax.to($holderLb, time, { x: "-=" + wScreen, ease: myEase,onComplete: notAnime });
    }
  });
}

var lastClass, clicked, firstLetter, minusP;

$($boxPhotoTrigger).click(function() { lastClass = $(this).attr("class").split(" ")[1]; //pega ultima Classe do This = ElementoClickado
  clicked = lastClass.slice(-2); //pega as duas ultimas Letras da Class clicada
  firstLetter = clicked.substring(0, 1); //pega a primeira letra da var clicked
  if (firstLetter == "p") {
    //verifica se a primeira letra é igual p
    clicked = clicked.slice(-1); //remove o p da class clicked
  }
  lightbox(clicked);
});

$(".ctn-slide-lightbox .pf-ctn-fecha").click(function() {
  TweenMax.to($ctnLightBox, 1, { autoAlpha: 0 });
});




///////////////////////// hover menu triangulo
$(".linktag").hover(
  function() {
    var class2 = $(this).attr("class").split(" ")[1];
    TweenMax.to("."+class2+" img", .4, {opacity: 1, y: 9});
    
  },
  function() {
    var class2 = $(this).attr("class").split(" ")[1];
    TweenMax.to("."+class2+" img", .3, {opacity: 0, y:-10});
  
  }
);
///////////////////////// hover menu triangulo



///////////////////////// hover das imagens galeria
$( ".box-foto-galeria" ).hover(    
  function() {
    var classe1 = $(this).attr("class").split(" ")[1];
TweenMax.to("."+classe1+" .hover-galeria", 0.5, {opacity: .8});
TweenMax.to("."+classe1+" p", 0.5, {opacity: 1});
  },
  function() {
    var classe1 = $(this).attr("class").split(" ")[1];
    TweenMax.to("."+classe1+" .hover-galeria", 0.5, {opacity: 0});  
    TweenMax.to("."+classe1+" p", 0.5, {opacity: 0});  
  }
);
///////////////////////// hover botão fecha

$(".pf-ctn-fecha").hover(
  function() {
  if ( !animee ) {    
    animee = true    
    TweenMax.to(this, 0.8, { ease: Expo.easeInOut, rotation: 180});
  }
 },
function () {
    TweenMax.to(this, 0.8, {ease: Expo.easeInOut, rotation: 0, onComplete: animee = false });
});

///////////////////////// hover lista menu modal

$(".menu-modal ul li a, .menu-modal ul li").hover(
  function() {
    TweenLite.to(this, 0.4, { x: 10, color: "#547b9c" });
  },
  function() {
    TweenLite.to(this, 0.4, { x: 0, color: "#fff" });
  }
);


/////////////////////////  ESPECIALIDADES

$(".line-full").click(function() {
  var class2 = $(this).attr("class").split(" ")[1],
  HolderHeight = $("."+class2+" .holder-paragrafo").height(),
  HolderHeightP = $("."+class2+" .holder-paragrafo p").height(),
  facMenos = $("."+class2+" .fac-menos"); 

  if ( HolderHeight == 0 ) {      
  TweenLite.to("."+class2+" .holder-paragrafo", .8, { height: HolderHeightP+80});
  TweenLite.to(facMenos, .4, { autoAlpha:0}); 
  }

  if ( HolderHeight == HolderHeightP+80) { 
    TweenLite.to("."+class2+" .holder-paragrafo", .5, { height: 0});
    TweenLite.to(facMenos, .4, { autoAlpha:1});
    }
});








  


  //////////cortina 2
var tlintroPage = new TimelineMax()
  .from(".cortina-2", 1.5, { backgroundColor:"#fff",ease: Power3.easeOut },0)
  .to(".cortina-2", 1.2, {scaleY: 0, transformOrigin: "top right", ease: Power3.easeOut })
  .from(".i-triangulo", 2, { ease: Expo.easeInOut, x: -100, autoAlpha: 0 },"-=1")  
  .from(".i-title", 2, { ease: Expo.easeInOut, x: 100, autoAlpha: 0 },"-=1")
  .from("button.i-scroll", 2,{ ease: Expo.easeInOut, autoAlpha: 0 },"-=1")


 /////////////////////////  intro inner

var tlintroPage = new TimelineMax()
  .to(".cortina", 1.5, {delay: .5, scaleY: 0, transformOrigin: "top right", ease: Power3.easeOut },0)
  .from(".model-1", 1.5, {y: 100, ease: Power3.easeOut },0)  
  .from(".slider-triangle-1", 4, {opacity: 0, x: -200, ease: Power3.easeOut },"homejuntos1")
  .from(".prime-home-h1", 4, {delay: .2, opacity: 0, x: 200, ease: Power3.easeOut },"homejuntos1")
  .from(".home-nav-1", 2, {opacity: 0},"-=.5")


