$(document).on('click', '.burger_nav', function () {
   $('header').toggleClass('nav_open')
});

//То что работает только при загрузке dom
setTimeout(function () {
   $('.home_banner').owlCarousel({
      loop:true,
      items:1,
      autoHeight:true,
      autoHeightClass: 'owl-height',
      autoplay:true,
      autoplayTimeout:7000,
      autoplayHoverPause:true,
      responsive:{
         0:{
            nav:false,
            dots: true
         },
         800:{
            nav:true,
            navText: '',
            dots: false
         }
      }
   });

   $('.owl_home_bottom').owlCarousel({
      loop:true,
      dots: false,
      margin:30,
      responsive:{
         0:{
            items:1,
            nav:false,
            dots: true
         },
         900:{
            items:3,
            nav:true,
            navText: '',
            dots: false
         },
         1200:{
            items:4,
            nav:true,
            navText: '',
            dots: false
         }
      }
   });
}, 0);




