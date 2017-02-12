$(document).ready(function(){
  // This is the top banner carousel
  $('.banner-carousel').owlCarousel({
      loop:true,
      margin:10,
      items:1,
      autoplay: true
  });

  // This is the sponser banner carousel
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

  // This is the membership counter
  $('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 8000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });

  });

})
