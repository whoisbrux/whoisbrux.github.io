var tlintroPage = new TimelineMax();
tlintroPage.from(".cortina", 1, {backgroundColor:"#000"});
tlintroPage.to(".cortina", 3, { autoAlpha: 0 });
tlintroPage.from(".i-triangulo", 2,{ ease: Expo.easeInOut, x: -100, autoAlpha: 0 },"-=2");
tlintroPage.from(".i-title", 2, { ease: Expo.easeInOut, x: 100, autoAlpha: 0 },"-=2");
tlintroPage.from("button.i-scroll", 2,{ ease: Expo.easeInOut, autoAlpha: 0 },"-=1");