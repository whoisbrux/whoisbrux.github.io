// -------------  whois ------------- //
var animating = false,
		count = 0;

function notAnime() {
  animating = false;
}


var SliderHome = document.querySelectorAll('.sliders');
var SliderLeng = $(".sliders").length;

TweenMax.set(SliderHome[0], { left: 0 });

$(".depois").click(function () {

    var SliderPosition = $(SliderHome[SliderLeng - 1]);
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
            TweenMax.set(SliderHome[3], { left: "100vw" })

            var tMaxSlidersTeste1 = new TimelineMax()
                .to(SliderHome[0], 1, { ease: Expo.easeInOut, left: 0 }, 0)
                .to(SliderHome[SliderLeng - 1], 1, { ease: Expo.easeInOut, left: "-100vw", onComplete: notAnime }, 0)
                .set(SliderHome[SliderLeng - 1], { left: "100vw" })
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
            TweenMax.set(SliderHome[SliderLeng - 1], { left: "-100vw" })

            var tMaxSlidersTeste1 = new TimelineMax()
                .to(SliderHome[SliderLeng - 1], 1, { ease: Expo.easeInOut, left: 0 }, 0)
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