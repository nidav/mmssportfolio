$(document).ready(function(){

  $('.banner-carousel').owlCarousel({
      loop:true,
      margin:10,
      items:1,
      autoplay: true
  });

  $(".sponsors-banner").owlCarousel({
    loop:true,
    margin:10,
    autoplay: 100,
    autoplaySpeed:1000,
    responsive:{
        0:{
            items:1,
            slideBy:1,
            dots:false,
        },
        600:{
            items:2,
            slideBy:2,
        },
        1000:{
            items:4,
            slideBy:4,
        }

    }


  });

  countUp.function(".counter", 0, 1200, 0, 3)

})
