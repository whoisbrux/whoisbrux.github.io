
window.onload = function () {
    TweenMax.to('.preload',1, { scaleY: 0, transformOrigin:'top left', ease: Power3.easeOut })
}

var time = .8;

var tlInit = new TimelineMax({ id: 'tlIntro' })
    .from('.ctn-bg', time, { autoAlpha: 0, scale: 1.08 })
    .from('.ctn-svg', time, { autoAlpha: 0 })
    .from('#tbase', time * 3, {delay: .2, autoAlpha: 0, drawSVG: '0%', ease: Power3.easeOut })
    .from('#tbase', time * 1.6, { fill: 'transparent', ease: Power3.easeOut }, 'juntos0')
    .to('#tbase', time * 1.6, { stroke: 'transparent', ease: Linear.easeNone }, 'juntos0')


    //letterI = inferior
    .from('#leti', time, { yPercent: 100, opacity: 0, ease: Power3.easeInOut }, '-=.42')
    .to('#leti', time, { yPercent: 30, ease: Power3.easeInOut }, 'juntos+=.6')
    .to('#leti', time, { morphSVG: "#tinf", fill: "#3E86C6", ease: Power3.easeInOut }, 'juntos+=.4')
    //TweenLite.to(graph, 2.5, { ease: Elastic.easeOut.config(2.5, 1), y: -500 });

    //letterM = left
    .from('#letm', time / 1.6, { yPercent: 100, opacity: 0, ease: Power3.easeInOut }, '-=.42')
    .to('#letm', time / 1.6, { yPercent: -10, xPercent: -20, ease: Power3.easeInOut }, 'juntos1+=.4')
    .to('#letm', time, { morphSVG: "#tleft", fill: "#104674", ease: Power3.easeInOut }, 'juntos1+=.4')


    //letterN = right
    .from('#letn', time / 1.6, { yPercent: 100, opacity: 0, ease: Power3.easeInOut }, '-=.42')
    .to('#letn', time / 1.6, { yPercent: -10, xPercent: 20, ease: Power3.easeInOut }, 'juntos2+=.4')
    .to('#letn', time, { morphSVG: "#tright", fill: "#1D6AAF", ease: Power3.easeInOut }, 'juntos2+=.4')


    //Unise
    .to('#leti', time, { yPercent: 0, ease: Power3.easeInOut }, 'uni')
    .to('#letm', time, { yPercent: 0, xPercent: 0, ease: Power3.easeInOut }, 'uni')
    .to('#letn', time, { yPercent: 0, xPercent: 0, ease: Power3.easeInOut }, 'uni')
    .from('.logo-letters', time * 3, { autoAlpha: 0, ease: Linear.easeNone, }, 'tog-=.1')
    .from('.logo-letters', time * 3, { ease: Power3.easeOut, yPercent: 200 }, 'tog-=.1')
    .from('.ctn-btn', time, { autoAlpha: 0 })

// GSDevTools.create({	minimal:false });//css .gs-dev-tools {  z-index: 99999;  position: fixed; }


    

function goHome() {
    TweenMax.to('.preaload',.1,{opacity:1, onComplete: function() { window.location = "./home.html";}})
   // 
}
$('.ctn-btn, .go-home').click(function () {
    var tlGoHome = new TimelineMax()
    .to('.ctn-btn, .ctn-svg',1,{y:-20, opacity:0})
    .to('.ctn-btn, .ctn-svg, .ctn-bg',1,{opacity:0, ease: Linear.easeNone, onComplete: goHome},0)


});


var tlbtn = new TimelineMax({repeat:-1})
    .from('.intro-bd-1', .5, { autoAlpha: 0, scaleX: 0, transformOrigin:'top left' },"bdjuntas1")
    .from('.intro-bd-2', .5, { scaleY: 0, transformOrigin:'top left' },"bdjuntas2")

    .from('.intro-bd-3', .5, { autoAlpha: 0, scaleX: 0, transformOrigin:'top right' },"bdjuntas1")
    .from('.intro-bd-4', .5, { scaleY: 0, transformOrigin:' bottom left' },"bdjuntas2")


    .to('.intro-bd-1', .5, { scaleX: 0, transformOrigin:'top right' },"bdjuntas3")
    .to('.intro-bd-2', .5, { scaleY: 0, transformOrigin:'bottom right' },"bdjuntas4")

    .to('.intro-bd-3', .5, { scaleX: 0, transformOrigin:'top left' },"bdjuntas3")
    .to('.intro-bd-4', .5, { scaleY: 0, transformOrigin:' top right' },"bdjuntas4")