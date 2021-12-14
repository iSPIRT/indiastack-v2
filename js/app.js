$(document).foundation();

$(document).ready(function(){
  $('.indiastack-is-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'ease',
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.timeline-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px'
      }
    }
    ]
  });

  $('.timeline-next').click(function(){
    $('.timeline-wrap').slick('slickNext');
  });

  $('.timeline-previous').click(function(){
    $('.timeline-wrap').slick('slickPrev');
  });


  // Hamburger menu

  $('.mobile-menu').on('click', function() {
    $('.hamburger-menu').toggleClass('animate');
    $('.top-bar').toggleClass('menu-open');
  })

});
