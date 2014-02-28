//= require 'vendor/jquery.gsap'
//= require 'vendor/jquery.fullPage'

$(function() {
  $.fn.fullpage({
    verticalCentered: false,
    resize : false,
    scrollingSpeed: 800,
    easing: 'easeOutQuad',
    menu: false,
    navigation: true,
    navigationTooltips: ['Home', 'Live Contacts', 'Search', 'Privacy', 'Duplicates', 'Backup', 'Colophon'],
    slidesNavigation: true,
    slidesNavPosition: 'right',
    loopHorizontal: true,
    autoScrolling: true,
    keyboardScrolling: true
  });
});