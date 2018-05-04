// -------------  Timeline Introdução ------------- //

var tlintro = new TimelineMax()
.from(".js-fader-h1", 1.5, {ease: Expo.easeInOut, opacity:0})
.from(".js-fader-bg-black", 1.5, {ease: Expo.easeInOut, scaleX: 0, transformOrigin:'left top'})
.to(".js-fader-h1", .5, {ease: Expo.easeInOut, color:"#fff"},"-=1")
.to(".js-fader-h1", .6, {ease: Expo.easeIn, y:100})
.to(".js-fader-bg-white", 1.5, {ease: Expo.easeInOut, scaleX: 0, transformOrigin:'left top'},"-=.1")
.from(".border-header", 1, {ease: Expo.easeInOut, boxShadow:"0px 0px 0px 0px inset"},"-=.3")


// -------------  Timeline Animação arrow down ------------- //

var tlarrowDown = new TimelineMax({repeat:-1})
.to(".js-arrow-down-1", .7, {delay: 3, ease: Expo.easeInOut, y:30})
.from(".js-arrow-down-2", .5, {ease: Expo.easeInOut, y:-30},"-=.4")


// -------------  Timeline Animação Menu Mob ------------- //

var MenuAtivo = false,
    animating = false;

function notAnime() {
  animating = false;
}

$(".ctn-trigger-mob").click(function() {
    if( !MenuAtivo && !animating ){
            MenuAtivo = true
            animating = true

        var tMaxMenuOut = new TimelineMax()
            .to(".ctn-menu-mob", 1.3, {ease: Expo.easeInOut, left:0, onComplete: notAnime})
    }  

    else if ( !animating ){
            MenuAtivo = false
            animating = true

        var tMaxMenuOut = new TimelineMax()
            .to(".ctn-menu-mob", 1.3, {ease: Expo.easeInOut, left:"-100vw", onComplete: notAnime})
    }
});


// -------------  Timeline Animação slider footer ------------- //

var SliderFooter = document.querySelectorAll('.js-slider-footer'),
    QntSliders = $(".js-slider-footer").length,
    count = 0;

TweenMax.set(SliderFooter[0], { opacity: 1 });

$(".trg-next").click(function () {
    if (count == QntSliders-1) {
        count = 0
    } else {
        count++
    }
    var tMaxSliderFooter1 = new TimelineMax()
        .to(SliderFooter, .6, { opacity: 0 })
        .to(SliderFooter[count], .6, { opacity: 1 })
});

$(".trg-prev").click(function () {
    if (count == 0) {
        count = QntSliders-1
    } else {
        count--
    }
    var tMaxSliderFooter1 = new TimelineMax()
        .to(SliderFooter, .6, { opacity: 0 })
        .to(SliderFooter[count], .6, { opacity: 1 })
});




// -------------  whois ------------- //

var SliderHome = document.querySelectorAll('.sliders');
var SliderLeng = $(".sliders").length;

TweenMax.set(SliderHome[0], { left: 0 });

$(".depois").click(function () {

    var SliderPosition = $(SliderHome[3]);
    var position = SliderPosition.position().left;

    if (!animating) {

        animating = true

        if (count == SliderLeng - 1) {
            count = 0
        } else {
            count++
        }
        if (position == 0) {

            TweenMax.set(SliderHome[0], { left: "100vw" })
            TweenMax.set(SliderHome[1], { left: "100vw" })
            TweenMax.set(SliderHome[2], { left: "100vw" })

            var tMaxSlidersTeste1 = new TimelineMax()
                .to(SliderHome[0], 1, { ease: Expo.easeInOut, left: 0 }, 0)
                .to(SliderHome[3], 1, { ease: Expo.easeInOut, left: "-100vw", onComplete: notAnime }, 0)
                .set(SliderHome[3], { left: "100vw" })
        }

        else {
            var tMaxSlidersTeste1 = new TimelineMax()
                .to(SliderHome[count - 1], 1, { ease: Expo.easeInOut, left: "-100vw" }, 0)
                .to(SliderHome[count], 1, { ease: Expo.easeInOut, left: 0, onComplete: notAnime }, 0)
        }
    }
});



$(".antes").click(function () {

    var SliderPosition2 = $(SliderHome[0]);
    var position2 = SliderPosition2.position().left;

    if (!animating) {
        animating = true
        if (count == 0) {
            count = SliderLeng - 1
        } else {
            count--
        }

        if (position2 == 0) {
            TweenMax.set(SliderHome[1], { left: "-100vw" })
            TweenMax.set(SliderHome[2], { left: "-100vw" })
            TweenMax.set(SliderHome[3], { left: "-100vw" })

            var tMaxSlidersTeste1 = new TimelineMax()
                .to(SliderHome[3], 1, { ease: Expo.easeInOut, left: 0 }, 0)
                .to(SliderHome[0], 1, { ease: Expo.easeInOut, left: "100vw", onComplete: notAnime }, 0)
                .set(SliderHome[0], { left: "-100vw" })
        }

        else {
            var tMaxSlidersTeste1 = new TimelineMax()
                .to(SliderHome[count + 1], 1, { ease: Expo.easeInOut, left: "+100vw" }, 0)
                .to(SliderHome[count], 1, { ease: Expo.easeInOut, left: 0, onComplete: notAnime }, 0)
        }
    }
});