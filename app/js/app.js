// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import ScrollMagic from 'scrollmagic';

document.addEventListener('DOMContentLoaded', () => {
    const SCREEN_HEIGHT = screen.height;

    const section1 = document.querySelector('.company-section-s1');
    const section1Bg = section1.querySelector('.section-bg');
    const logoTitle = document.querySelector('.logo__title');
    const heroStartframe = document.querySelector('.hero-video-poster');
    const introVideo = document.getElementById('hero-video');
    const heroEndframe = document.querySelector('.hero-video-endframe');

    function checkforVideo() {
        //Every 500ms, check if the video element has loaded
        let b = setInterval(() => {
            if (introVideo.readyState >= 3) {
                //This block of code is triggered when the video is loaded
                console.log('video loaded', introVideo.readyState);
                startHeroVideo(introVideo);

                clearInterval(b);
            }
        }, 500);
    }

    function startHeroVideo(introVideo) {
        setTimeout(() => {
            heroStartframe.style.opacity = 0;
            introVideo.setAttribute('autoplay', 'autoplay');
            introVideo.play();
        }, 1000);
    }
    introVideo.addEventListener('ended', (event) => {
        introVideo.style.opacity = 0;
        heroEndframe.style.opacity = 1;
    });

    checkforVideo();
    // create a scene
    const controller = new ScrollMagic.Controller();

    // features
    const keyFeatures = document.querySelectorAll('.key-features__feature');
    keyFeatures.forEach((item) => {
        new ScrollMagic.Scene({ triggerElement: item, offset: 50, duration: $(item).height() - 50 })
            .setClassToggle(item, 'active')
            .addTo(controller);
        // .on("start", function (event) {
        //     $(item).prev().removeClass("active");
        // });
    });
});
