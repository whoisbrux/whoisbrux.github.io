var tlintroPage = new TimelineMax();
tlintroPage.from(
  ".i-triangulo",
  3,
  { ease: Expo.easeInOut, x: -100, autoAlpha: 0 },
  "-=2"
);
tlintroPage.from(
  ".i-title",
  2.5,
  { ease: Expo.easeInOut, x: 100, autoAlpha: 0 },
  "-=2"
);
tlintroPage.from(
  "button.i-scroll",
  2,
  { ease: Expo.easeInOut, autoAlpha: 0 },
  "-=1"
);

/* MENU MODAL */

var tLmodalMenu = new TimelineMax({ paused: true });
$itemsli = $(".menu-modal li");

tLmodalMenu
  .to(".menuMob", 0.6, { ease: Expo.easeInOut, scale: 2, autoAlpha: 0 })
  .from(
    ".menu-modal",
    1,
    { ease: Expo.easeInOut, x: "-100%", autoAlpha: 0 },
    "-=.5"
  )
  .staggerFrom(
    $itemsli,
    1,
    {
      delay: 0.1,
      autoAlpha: 0,
      y: 50,
      ease: Elastic.easeOut.config(0.5, 0.75)
    },
    0.1,
    "-=.5"
  )
  .from(
    ".menu-modal buttom.pf-botao",
    0.6,
    { ease: Expo.easeInOut, scale: 2, autoAlpha: 0 },
    "-=1.3"
  );

$(".menuMob, .trigger-modal").click(function() {
  tLmodalMenu.play();
});

$(".menu-modal buttom.pf-botao").click(function() {
  tLmodalMenu.reverse();
});

//$(".menu-modal buttom.pf-botao").click(function() {
//	tLmodalMenu.reverse();
// });

/////////////////////// SCROLL DOWN

$(".js-scroll-sobre").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: $(".scroll-sobre").offset().top - 100
    },
    1000
  );
});

$(".js-scroll-galeria").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: $(".scroll-galeria").offset().top - 1
    },
    1000
  );
});

$(".js-scroll-profissionais").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: $(".scroll-profissionais").offset().top - 1
    },
    1000
  );
});

/////////////////////// SCROLL DOWN

/////////////////////// PROFISSIONAIS

function prof(jspf) {
  var tlPf1 = new TimelineMax()
    .to(".pf-ctn-inner" + jspf, 1.2, {
      ease: Expo.easeInOut,
      top: "0vh",
      autoAlpha: 1
    })
    .to(".pf-foto-inner", 0.5, { scale: 1.02 }, "-=.3");
  $(".pf-ctn-fecha").on("click", function() {
    tlPf1.reverse();
  });
}

$(".p-ctn-prof").click(function() {
  var elClicked = $(this)
    .attr("class")
    .split(" ")[1];
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
  var Pfhover = $(this)
    .attr("class")
    .split(" ")[1];
  ttt("." + Pfhover);
});

$(".pf-hover-1").mouseleave(function() {
  var Pfhover = $(this)
    .attr("class")
    .split(" ")[1];
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
    .to(
      ".glr-trigger-cir" + prmt1,
      0.6,
      { scale: 1.3, backgroundColor: "#000" },
      "-=.8"
    );
}

$(".glr-trigger-cir").click(function() {
  var clickTrigger = $(this)
    .attr("class")
    .split(" ")[1];
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
  var clickfoto = $(this)
    .attr("class")
    .split(" ")[1];
  glrinner("." + clickfoto, clickfoto);
});

///////////////////////// GALERIA

///////////////////////// ARROW ANIMAÇÃO ABRE

var tlarrow = new TimelineMax({
  onComplete: function() {
    tlarrow
      .fromTo(
        ".arrow-down",
        0.2,
        { ease: Expo.easeIn, y: -10 },
        { ease: Expo.easeIn, y: 12 }
      )
      .to(".arrow-down", 1, { y: -10 });
    this.restart();
  }
});

$(".btnSaiba").mouseenter(function() {
  var tlsaiba = new TimelineMax()
    .to(".js-h-rgt", 0.4, { ease: Expo.easeInOut, x: 40, opacity: 0 })
    .to(".js-h-rgt", 0, { x: -10 })
    .to(".js-h-rgt", 0.4, { x: 0, opacity: 0.8 });
});

$(".navegador").mouseenter(function() {
  var tlnav = new TimelineMax()
    .to(".mg-lf-1", 0.4, { ease: Expo.easeInOut, y: 40, opacity: 0 })
    .to(".mg-lf-1", 0, { y: -40 })
    .to(".mg-lf-1", 0.4, { y: 0, opacity: 0.8 });
});

///////////////////////// ARROW ANIMAÇÃO FECHA

///////////////////////// HOME ABRE
var time = 1,
  timeLinha = 1,
  timeMain = 0.9;


  TweenMax.to(".lt1", 0.5, { width: "100%" }, "-=0.5")
  TweenMax.to(".tc1", 0.5, { scale: 1.7, backgroundColor: "#fff" }, "-=0.5")
var tl1 = new TimelineLite();
tl1
  .addPause()
  .to(".bordaT1", 0.4, { height: "100%" }, "juntoBorda1")
  .to(".bordaR1", 0.4, { width: "100%" }, "juntoBorda1")
  .to(".bordaB1", 0.4, { height: "100%" }, "juntoBorda1")
  .to(".bordaL1", 0.4, { width: "100%" }, "juntoBorda1")
  .to(".lt1", 0.5, { width: "0%" }, "-=0.2")
  .to(".tc1", 0.5, { scale: 1, backgroundColor: "transparent" }, "-=0.2")
  .to(".ctnCentral", 0.8, { y: "300px", opacity: 0 }, "-=0.1")
  .to(".main", timeMain, { ease: Expo.easeInOut, top: "-100vh" })
  .to(".lt2", 0.5, { width: "100%" }, "-=1")
  .to(".tc2", 0.5, { scale: 1.7, backgroundColor: "#fff" }, "-=1")
  .to(".bordaT1", 0.5, { height: "0%" }, "juntoBorda2")
  .to(".bordaR1", 0.5, { width: "0%" }, "juntoBorda2")
  .to(".bordaB1", 0.5, { height: "0%" }, "juntoBorda2")
  .to(".bordaL1", 0.5, { width: "0%" }, "juntoBorda2")
  .to(
    ".ctnCentral",
    time,
    { ease: Expo.easeInOut, y: "250px", opacity: 1 },
    "-=1"
  )
  .from(
    ".foto2 .trianguloDesk",
    1.5,
    { ease: Expo.easeInOut, scale: 2, opacity: 0 },
    "-=1"
  )
  .from(
    ".foto2 .boxNumeral",
    1.5,
    { ease: Expo.easeInOut, x: "100px", opacity: 0 },
    "-=0.7"
  )
  /////slider 2
  .addPause()
  .to(".foto2", 1, { ease: Expo.easeInOut, backgroundPosition: "bottom" })
  .to(".ctnCentral", 1, { ease: Expo.easeInOut, y: "0px", opacity: 1 }, "-=1")
  .from(".foto2 .bordaHome", timeLinha, { width: 0, autoAlpha: "0" }, "-=0.1")
  .from(".foto2 .boxDescri p", time, { autoAlpha: "0" }, "-=0.5")
  .from(".foto2 .btnSaiba", 1.1, { autoAlpha: "0" }, "-=0.3")
  .addPause()
  .to(".bordaT1", 0.4, { height: "100%" })
  .to(".bordaR1", 0.4, { width: "100%" }, "-=0.4")
  .to(".bordaB1", 0.4, { height: "100%" }, "-=0.4")
  .to(".bordaL1", 0.4, { width: "100%" }, "-=0.4")
  .to(".lt2", 0.5, { width: "0%" }, "-=0.5")
  .to(".tc2", 0.5, { scale: 1, backgroundColor: "transparent" }, "-=0.5")
  .to(".ctnCentral", 0.8, { y: "300px", opacity: 0 }, "-=0.1")
  .to(".main", timeMain, { ease: Expo.easeInOut, top: "-200vh" })
  .to(".lt3", 0.5, { width: "100%" }, "-=1")
  .to(".tc3", 0.5, { scale: 1.7, backgroundColor: "#fff" }, "-=1")
  .to(".bordaT1", 0.5, { height: "0%" })
  .to(".bordaR1", 0.5, { width: "0%" }, "-=0.5")
  .to(".bordaB1", 0.5, { height: "0%" }, "-=0.5")
  .to(".bordaL1", 0.5, { width: "0%" }, "-=0.5")
  .to(
    ".ctnCentral",
    time,
    { ease: Expo.easeInOut, y: "250px", opacity: 1 },
    "-=1"
  )
  .from(
    ".foto3 .trianguloDesk",
    1.5,
    { ease: Expo.easeInOut, scale: 2, opacity: 0 },
    "-=1"
  )
  .from(
    ".foto3 .boxNumeral",
    1.5,
    { ease: Expo.easeInOut, x: "100px", opacity: 0 },
    "-=0.7"
  )
  .addPause()
  .to(".foto3", 1, { ease: Expo.easeInOut, backgroundPosition: "bottom" })
  .to(".ctnCentral", 1, { ease: Expo.easeInOut, y: "0px", opacity: 1 }, "-=1")
  .from(".foto3 .bordaHome", timeLinha, { width: 0, autoAlpha: "0" }, "-=0.1")
  .from(".foto3 .boxDescri p", time, { autoAlpha: "0" }, "-=0.5")
  .from(".foto3 .btnSaiba", 1.1, { autoAlpha: "0" }, "-=0.3")

  ////slider 3
  .addPause()
  .to(".bordaT1", 0.4, { height: "100%" })
  .to(".bordaR1", 0.4, { width: "100%" }, "-=0.4")
  .to(".bordaB1", 0.4, { height: "100%" }, "-=0.4")
  .to(".bordaL1", 0.4, { width: "100%" }, "-=0.4")
  .to(".lt3", 0.5, { width: "0%" }, "-=0.5")
  .to(".tc3", 0.5, { scale: 1, backgroundColor: "transparent" }, "-=0.5")
  .to(".ctnCentral", 0.8, { y: "300px", opacity: 0 }, "-=0.1")
  .to(".main", timeMain, { ease: Expo.easeInOut, top: "-300vh" })
  .to(".lt4", 0.5, { width: "100%" }, "-=1")
  .to(".tc4", 0.5, { scale: 1.7, backgroundColor: "#fff" }, "-=1")
  .to(".bordaT1", 0.5, { height: "0%" })
  .to(".bordaR1", 0.5, { width: "0%" }, "-=0.5")
  .to(".bordaB1", 0.5, { height: "0%" }, "-=0.5")
  .to(".bordaL1", 0.5, { width: "0%" }, "-=0.5")
  .to(
    ".ctnCentral",
    time,
    { ease: Expo.easeInOut, y: "250px", opacity: 1 },
    "-=1"
  )
  .from(
    ".foto4 .trianguloDesk",
    1.5,
    { ease: Expo.easeInOut, scale: 2, opacity: 0 },
    "-=1"
  )
  .from(
    ".foto4 .boxNumeral",
    1.5,
    { ease: Expo.easeInOut, x: "100px", opacity: 0 },
    "-=0.7"
  )
  .addPause()
  .to(".foto4", 1, { ease: Expo.easeInOut, backgroundPosition: "bottom" })
  .to(".ctnCentral", 1, { ease: Expo.easeInOut, y: "0px", opacity: 1 }, "-=1")
  .from(".foto4 .bordaHome", timeLinha, { width: 0, autoAlpha: "0" }, "-=0.1")
  .from(".foto4 .boxDescri p", time, { autoAlpha: "0" }, "-=0.5")
  .from(".foto4 .btnSaiba", 1.1, { autoAlpha: "0" }, "-=0.3")

  /////slider 4
  .addPause()
  .to(".bordaT1", 0.4, { height: "100%" })
  .to(".bordaR1", 0.4, { width: "100%" }, "-=0.4")
  .to(".bordaB1", 0.4, { height: "100%" }, "-=0.4")
  .to(".bordaL1", 0.4, { width: "100%" }, "-=0.4")
  .to(".lt4", 0.5, { width: "0%" }, "-=0.5")
  .to(".tc4", 0.5, { scale: 1, backgroundColor: "transparent" }, "-=0.5")
  .to(".ctnCentral", 0.8, { y: "300px", opacity: 0 }, "-=0.1")
  .to(".main", timeMain, { ease: Expo.easeInOut, top: "-400vh" })
  .to(".lt5", 0.5, { width: "100%" }, "-=1")
  .to(".tc5", 0.5, { scale: 1.7, backgroundColor: "#fff" }, "-=1")
  .to(".bordaT1", 0.5, { height: "0%" })
  .to(".bordaR1", 0.5, { width: "0%" }, "-=0.5")
  .to(".bordaB1", 0.5, { height: "0%" }, "-=0.5")
  .to(".bordaL1", 0.5, { width: "0%" }, "-=0.5")
  .to(
    ".ctnCentral",
    time,
    { ease: Expo.easeInOut, y: "250px", opacity: 1 },
    "-=1"
  )
  .from(
    ".foto5 .trianguloDesk",
    1.5,
    { ease: Expo.easeInOut, scale: 2, opacity: 0 },
    "-=1"
  )
  .from(
    ".foto5 .boxNumeral",
    1.5,
    { ease: Expo.easeInOut, x: "100px", opacity: 0 },
    "-=0.7"
  )

  /////slider 5
  .addPause()
  .to(".foto5", 1, { ease: Expo.easeInOut, backgroundPosition: "bottom" })
  .to(".ctnCentral", 1, { ease: Expo.easeInOut, y: "0px", opacity: 1 }, "-=1")
  .from(".foto5 .bordaHome", timeLinha, { width: 0, autoAlpha: "0" }, "-=0.1")
  .from(".foto5 .boxDescri p", time, { autoAlpha: "0" }, "-=0.5")
  .from(".foto5 .btnSaiba", 1.1, { autoAlpha: "0" }, "-=0.3");

$(".js-click-home").on("click", function() {
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

///////////////////////// HOME ABRE
//////////////galeria 2
var trigger1 = ".galeria-navegador :nth-child(1)";
trigger2 = ".galeria-navegador :nth-child(2)";
trigger3 = ".galeria-navegador :nth-child(3)";
trigger4 = ".galeria-navegador :nth-child(4)";
trigger5 = ".galeria-navegador :nth-child(5)";
holderTgr = ".holder-slide-trg";

TweenMax.to(trigger1, 2, {
  ease: Expo.easeInOut,
  backgroundColor: "#555",
  scale: 1.2
});

$(trigger1).click(function() {
  TweenMax.to(trigger2, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger3, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger4, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger5, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(holderTgr, 1, { ease: Expo.easeInOut, top: "0vh" });
  TweenMax.to(trigger1, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "#555",
    scale: 1.2
  });
});

$(trigger2).click(function() {
  TweenMax.to(trigger1, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger3, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger4, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger5, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(holderTgr, 1, { ease: Expo.easeInOut, top: "-100vh" });
  TweenMax.to(trigger2, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "#555",
    scale: 1.2
  });
});

$(trigger3).click(function() {
  TweenMax.to(trigger1, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger2, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger4, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger5, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(holderTgr, 1, { ease: Expo.easeInOut, top: "-200vh" });
  TweenMax.to(trigger3, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "#555",
    scale: 1.2
  });
});

$(trigger4).click(function() {
  TweenMax.to(trigger2, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger3, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger1, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger5, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(holderTgr, 1, { ease: Expo.easeInOut, top: "-300vh" });
  TweenMax.to(trigger4, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "#555",
    scale: 1.2
  });
});

$(trigger5).click(function() {
  TweenMax.to(trigger2, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger3, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger4, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(trigger1, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "transparent"
  });
  TweenMax.to(holderTgr, 1, { ease: Expo.easeInOut, top: "-400vh" });
  TweenMax.to(trigger5, 2, {
    ease: Expo.easeInOut,
    backgroundColor: "#555",
    scale: 1.2
  });
});

///////////////// HOVERS

$(".trigger-modal").hover(
  function() {
    TweenMax.to(".js-trigger-modal :nth-child(1)", 0.6, {
      ease: Expo.easeInOut,
      width: "20px"
    });
    TweenMax.to(".js-trigger-modal :nth-child(3)", 0.6, {
      ease: Expo.easeInOut,
      width: "20px"
    });
  },
  function() {
    TweenMax.to(".js-trigger-modal :nth-child(1)", 0.6, {
      ease: Expo.easeInOut,
      width: "41px"
    });
    TweenMax.to(".js-trigger-modal :nth-child(3)", 0.6, {
      ease: Expo.easeInOut,
      width: "41px"
    });
  }
);

$(".pf-ctn-fecha").hover(
  function() {
    TweenLite.to(".pf-ctn-fecha img", 0.8, {
      ease: Expo.easeInOut,
      rotation: "+=180"
    });
  },
  function() {
    TweenLite.to(".pf-ctn-fecha img", 0.8, {
      ease: Expo.easeInOut,
      rotation: "-=180"
    });
  }
);

$(".menu-modal ul li a, .menu-modal ul li").hover(
  function() {
    TweenLite.to(this, 0.4, { x: 10, color: "#547b9c" });
  },
  function() {
    TweenLite.to(this, 0.4, { x: 0, color: "#fff" });
  }
);

///////////// NOT.JS
var lengPhotos = $(".ctn-slide-lightbox .photo-trg").length,
  wScreen = $(window).width(),
  $holderLb = $(".holder-slide-lightbox"),
  time = 1,
  $boxPhotoTrigger = $(".box-photo-galeria-trg"),
  $ctnLightBox = $(".ctn-slide-lightbox"),
  myEase = Power3.easeInOut,
  animating = false;

TweenMax.set($holderLb, { width: wScreen * lengPhotos });

TweenMax.set($ctnLightBox, { autoAlpha: 0 });

//TweenLite.defaultEase = Linear.easeNone;

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

      TweenMax.to($holderLb, time, {
        x: "-=" + wScreen,
        ease: myEase,
        onComplete: notAnime
      });
    }
  });

  $(".lightbox-navegador.left-arrow").click(function() {
    if (!animating && !bp1.hasClass("active")) {
      // tecla Left

      animating = true;

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

  $(".lightbox-navegador.right-arrow").click(function() {
    if (!animating && !lastBp.hasClass("active")) {
      // tecla Right

      animating = true;

      count++;

      $(".box-photo-galeria-lb").removeClass("active");

      $(".ctn-slide-lightbox .bp" + count).addClass("active");

      TweenMax.to($holderLb, time, {
        x: "-=" + wScreen,
        ease: myEase,
        onComplete: notAnime
      });
    }
  });
}

var lastClass, clicked, firstLetter, minusP;

$($boxPhotoTrigger).click(function() {
  lastClass = $(this)
    .attr("class")
    .split(" ")[1]; //pega ultima Classe do This = ElementoClickado

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

/* Step by Step

1. create Animating, e add  on Events
2. create function notAnime
function notAnime() {

    animating = false;

}



3. Create Variavels for get Block evetns

var bp1 = $('.bp'), //primeiro box-photo

    lastBp = $('.bp' + lengPhotos), //ultimo box-photo

    count; //contador;



4.

        if (e.keyCode == 37 && !animating && !bp1.hasClass('active')) { // hasClass verifica se tem a class Active

            animating = true;

            count--

            $('.box-photo-galeria-lb').removeClass('active'); // remove class Active de todas as bp

            $('.ctn-slide-lightbox .bp' + count).addClass('active'); // adiciona class Active na photo Current

        }



        if (e.keyCode == 39 && !animating && !lastBp.hasClass('active')) { // hasClass verifica se tem a class Active

            animating = true;

            count++

            $('.box-photo-galeria-lb').removeClass('active'); // remove class Active de todas as bp

            $('.ctn-slide-lightbox .bp' + count).addClass('active'); // adiciona class Active na photo Current

        }

*/
