$(document).foundation();

$(document).ready(function(){
  $('.indiastack-is-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.timeline-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('.timeline-next').click(function(){
    $('.timeline-wrap').slick('slickNext');
  });

  $('.timeline-previous').click(function(){
    $('.timeline-wrap').slick('slickPrev');
  });

});
