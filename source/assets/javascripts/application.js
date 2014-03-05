//= require 'vendor/jquery.gsap'
//= require 'vendor/jquery.fullPage'
//= require 'vendor/jquery.pjax'

$(function() {

  $d = $(document);

  // function pjaxLoad(url) {
  //   $.pjax({
  //     url: url,
  //     container: '#main',
  //     fragment: '#main'
  //   });
  // }

  // $d.on('pjax:end', function(e) {
  //   initFullpage();
  // });

  // if ($.support.pjax) {
  //   // Clicking
  //   $d.on('click', '#header a', function(e) {
  //     e.preventDefault();
  //     pjaxLoad($(this).attr('href'));
  //   });
  // }

  // UA detection
  var ua = navigator.userAgent.toLowerCase();
  var isiOS = ua.indexOf("iphone") > -1 || ua.indexOf("ipod") > -1 || ua.indexOf("ipad") > -1;
  if (isiOS) {
    // Load iOS page
    //$('#nav-ios > a').trigger('click');
    window.location = $('#nav-ios > a').attr('href');
  }

  // Fullpage
  function initFullpage() {
    $.fn.fullpage({
      verticalCentered: false,
      resize : false,
      scrollingSpeed: 800,
      easing: 'easeOutQuad',
      menu: false,
      navigation: true,
      //navigationTooltips: ['Home', 'Live Contacts', 'Search', 'Privacy', 'Duplicates', 'Backup', 'Colophon'],
      slidesNavigation: true,
      slidesNavPosition: 'right',
      loopHorizontal: true,
      autoScrolling: true,
      keyboardScrolling: true
    });
  }
  initFullpage();

});