var tlintroHome = new TimelineMax();
tlintroHome.from(".cortina", 3, {backgroundColor:"#000"});
tlintroHome.to(".cortina", 3, { autoAlpha: 0 });
tlintroHome.from(".foto1 .trianguloHome", 3,{ ease: Expo.easeInOut, x: -300, autoAlpha: 0 },"-=1.5");
tlintroHome.from(".foto1 .tituloHome", 2.5,{ ease: Expo.easeInOut, x: 100, autoAlpha: 0 },"-=2");
tlintroHome.from(".ctnHeader", 2,{ autoAlpha: 0 },"-=1");
tlintroHome.from(".trigger", 2,{ ease: Expo.easeInOut, autoAlpha: 0 },"-=2");
tlintroHome.from(".foto1 .navegador2", 2,{ ease: Expo.easeInOut,scale: 1.5, autoAlpha: 0 },"-=2");