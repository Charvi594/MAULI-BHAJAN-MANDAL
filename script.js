const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".mySwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".mySwiper2 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper2 .swiper-button-next",
    prevEl: ".mySwiper2 .swiper-button-prev",
    
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
})

// menu toggle

document.getElementById('menuToggle').addEventListener('click', function() {
  document.getElementById('mainNav').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const isClickInsideMenu = document.getElementById('mainNav').contains(event.target);
  const isClickOnToggle = document.getElementById('menuToggle').contains(event.target);
  
  if (!isClickInsideMenu && !isClickOnToggle && document.getElementById('mainNav').classList.contains('active')) {
      document.getElementById('mainNav').classList.remove('active');
  }
});

//videos
  
function openVideo(src) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    const source = document.getElementById('videoSource');
    source.src = src;
    video.load();
    modal.style.display = 'block';
  }

  function closeVideo() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('videoPlayer');
    video.pause();
    video.currentTime = 0;
    modal.style.display = 'none';
  }

//language switching
 let currentLang = 'en';  // default language

// Function to load language JSON and update all elements
function setLanguage(lang) {
  fetch('lang.json')
    .then(res => res.json())
    .then(data => {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
          el.textContent = data[lang][key];
      });

      currentLang = lang;

      // Update the toggle button text
      // If current is English, show Hindi button and vice versa
      const toggleBtn = document.querySelector('.language-login span');
      toggleBtn.textContent = lang === 'en' ? 'हिंदी' : 'English';
    });
}

// Initial load language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});

// Add click event listener to toggle language on click
document.querySelector('.language-login span').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'hi' : 'en');
});


