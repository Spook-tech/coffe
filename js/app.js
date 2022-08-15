window.onload = function() {
   let catalogSwiper = new Swiper('.sales-swiper', {
      slidesPerView: 3,

      navigation: {
         nextEl: '.sales-button-next',
         prevEl: '.sales-button-prev',
       },

       breakpoints: {
         0: { 
           slidesPerView: 1,
           spaceBetween: 10
         },
         480: {
            slidesPerView: 1.2,
            spaceBetween: 20,
         },
         767: {
           slidesPerView: 1.4,
           spaceBetween: 20,
         },
         991: {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         1440: {
          slidesPerView: 3,
          spaceBetween: 0,
         },
       },
   });
   let instagramSwiper = new Swiper('.instagram__slider', {
    slidesPerView: 2.5,
    

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },

       breakpoints: {
        0: { 
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        767: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
       },
   });
};