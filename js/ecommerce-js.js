// time count down
function startCountdown() {
        const endDate = new Date("2025-12-31T23:59:59").getTime();
        setInterval(() => {
            const now = new Date().getTime();
            const distance = endDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.querySelector('.days').textContent = `${days} :`;
            document.querySelector('.hours').textContent = `${hours} :`;
            document.querySelector('.minuts').textContent = `${minutes} :`;
            document.querySelector('.seconds').textContent = seconds;

            document.querySelector('.speaker-day').textContent = `${days} `;
document.querySelector('.speaker-hour').textContent = `${hours} `;
document.querySelector('.speaker-minutes').textContent = `${minutes} `;
document.querySelector('.speaker-second').textContent = `${seconds} `;
        }, 1000);
    }
    startCountdown();

    
// offer swipper
    document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.mySwiper', {
            loop: true, // Enables infinite looping
            pagination: {
                el: '.swiper-pagination',
                clickable: true, // Allows clicking on pagination bullets
            },
            // autoplay: {
            //     delay: 3000, // Auto-swipe every 3 seconds
            //     disableOnInteraction: false, // Keeps autoplay active even after user interaction
            // },
        });
    });
 // offer swipper end

 document.addEventListener('DOMContentLoaded', function () {

      var swiper = new Swiper('.myproducts', {
        slidesPerView: 3,
        direction: getDirection(),
        navigation: {
          nextEl: '#nextEll',
          prevEl: '#prevEll',
        },
        breakpoints: {
          // For screens smaller than 750px
          750: {
              slidesPerView: 4,  // Show only 1 slide
              // direction: 'horizontal',  // Force horizontal layout for smaller screens
          }
      },
        on: {
          resize: function () {
            swiper.changeDirection(getDirection());
          },
        },
      });
    
      function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = windowWidth <= 760 ? 'vertical' : 'horizontal';
        return direction;
      }
    });

 // prosucts swiper
 document.addEventListener('DOMContentLoaded', function () {

  var swiper = new Swiper('.exoplore', {
    slidesPerView: 4,
    direction: getDirection(),
    navigation: {
      nextEl: '#nextll',
      prevEl: '#prevll',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = windowWidth <= 760 ? 'vertical' : 'horizontal';
    return direction;
  }
});

// prosucts swiper end

    //image modeling end
document.addEventListener('DOMContentLoaded',()=>{
    const mainImg = document.querySelectorAll(".mainImg");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.getElementById("closeBtn");
  

mainImg.forEach(img => {
  img.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src; // Set modal image source to clicked image source
     mainImg.style.hover="none"
  };
});
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
  });

  //image modeling end

// JavaScript to highlight the current link based on the URL

document.addEventListener('DOMContentLoaded',()=>{
window.onload = function () {
  const links = document.querySelectorAll(".homes a");
  const currentURL = window.location.href;

  links.forEach(link => {
      if (link.href === currentURL) {
          link.classList.add("active");
      }
  });
};
});

document.addEventListener('DOMContentLoaded', () => {
  function toggleMenu() {
      const menu = document.querySelector('.menu');
      menu.classList.toggle('active');
  }

  // Attaching the event listener to the burger menu element
  document.querySelector('.burger-menu').addEventListener('click', toggleMenu);

 
document.querySelector('.cross').addEventListener('click', toggleMenu);
});
