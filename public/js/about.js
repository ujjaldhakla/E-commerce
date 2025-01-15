//about section swiper
document.addEventListener('DOMContentLoaded',function(){
    var swiper = new Swiper(".workerss", {
      slidesPerView: 2,
      spaceBetween: 10,
      
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // For screens smaller than 750px
        750: {
            slidesPerView: 3,  // Show only 1 slide
            direction: 'horizontal',
              // Force horizontal layout for smaller screens
              spaceBetween: 50,
                    }
    },
    });
    });