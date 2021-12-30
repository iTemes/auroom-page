// Import vendor jQuery plugin example
import '~/app/js/dist/jquery.fullPage.min.js';

document.addEventListener('DOMContentLoaded', () => {
    // Custom JS
    $('#fullpage').fullpage({
        anchors: ['hero', 'first', 'second', 'third', 'fours', 'fifth'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 600,
    });
});
