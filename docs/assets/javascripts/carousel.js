/**
 * OmniFetch Documentation - Hero Image Carousel
 * Infinite scrolling carousel with light/dark theme support
 */

class HeroCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.track = this.container.querySelector('.hero-carousel-track');
    this.prevBtn = this.container.querySelector('.carousel-prev');
    this.nextBtn = this.container.querySelector('.carousel-next');
    this.indicatorsContainer = this.container.querySelector('.carousel-indicators');
    
    this.currentIndex = 0;
    this.autoScrollInterval = null;
    this.autoScrollDelay = 4000; // 4 seconds
    this.isUserInteracting = false;
    
    // Define image sets with light/dark variants
    this.images = [
      {
        light: 'assets/images/app/discover/discover-light.png',
        dark: 'assets/images/app/discover/discover-dark.png',
        title: 'OmniFetch Discover',
        alt: 'OmniFetch Discover Screen'
      },
      {
        light: 'assets/images/app/discover/discover-collections-light.png',
        dark: 'assets/images/app/discover/discover-collections-dark.png',
        title: 'Collections View',
        alt: 'OmniFetch Collections Screen'
      },
      {
        light: 'assets/images/app/discover/discover-show-light.png',
        dark: 'assets/images/app/discover/discover-show-dark.png',
        title: 'Show Details',
        alt: 'OmniFetch Show Details Screen'
      },
      {
        light: 'assets/images/app/sonarr/sonarr-calendar-light.png',
        dark: 'assets/images/app/sonarr/sonarr-calendar-dark.png',
        title: 'Sonarr Calendar',
        alt: 'Sonarr Calendar View'
      },
      {
        light: 'assets/images/app/sonarr/sonarr-library-light.png',
        dark: 'assets/images/app/sonarr/sonarr-library-dark.png',
        title: 'Sonarr Library',
        alt: 'Sonarr Library View'
      },
      {
        light: 'assets/images/app/sonarr/sonarr-seasons-light.png',
        dark: 'assets/images/app/sonarr/sonarr-seasons-dark.png',
        title: 'Season Details',
        alt: 'Sonarr Season Details'
      },
      {
        light: 'assets/images/app/radarr/radarr-calendar-light.png',
        dark: 'assets/images/app/radarr/radarr-calendar-dark.png',
        title: 'Radarr Calendar',
        alt: 'Radarr Calendar View'
      },
      {
        light: 'assets/images/app/radarr/radarr-library-light.png',
        dark: 'assets/images/app/radarr/radarr-library-dark.png',
        title: 'Radarr Library',
        alt: 'Radarr Library View'
      },
      {
        light: 'assets/images/app/lidarr/lidarr-library-light.png',
        dark: 'assets/images/app/lidarr/lidarr-library-dark.png',
        title: 'Lidarr Library',
        alt: 'Lidarr Music Library'
      },
      {
        light: 'assets/images/app/lidarr/lidarr-albums-light.png',
        dark: 'assets/images/app/lidarr/lidarr-albums-dark.png',
        title: 'Album View',
        alt: 'Lidarr Album Details'
      },
      {
        light: 'assets/images/app/jellyseerr/jellyseerr-requests-light.png',
        dark: 'assets/images/app/jellyseerr/jellyseerr-requests-dark.png',
        title: 'Media Requests',
        alt: 'Jellyseerr Requests View'
      },
      {
        light: 'assets/images/app/jellyseerr/jellyseerr-request-light.png',
        dark: 'assets/images/app/jellyseerr/jellyseerr-request-dark.png',
        title: 'Request Details',
        alt: 'Jellyseerr Request Details'
      }
    ];
    
    this.init();
  }
  
  init() {
    this.createCarouselItems();
    this.createIndicators();
    this.bindEvents();
    this.startAutoScroll();
  }
  
  createCarouselItems() {
    this.track.innerHTML = '';
    
    this.images.forEach((image, index) => {
      const item = document.createElement('div');
      item.className = 'hero-carousel-item';
      
      const lightImg = document.createElement('img');
      lightImg.src = image.light;
      lightImg.alt = `${image.alt} Light Mode`;
      lightImg.className = 'light-mode-only glightbox';
      lightImg.setAttribute('data-glightbox', `title: ${image.title}`);
      lightImg.setAttribute('data-gallery', 'hero-carousel');
      
      const darkImg = document.createElement('img');
      darkImg.src = image.dark;
      darkImg.alt = `${image.alt} Dark Mode`;
      darkImg.className = 'dark-mode-only glightbox';
      darkImg.setAttribute('data-glightbox', `title: ${image.title}`);
      darkImg.setAttribute('data-gallery', 'hero-carousel');
      
      item.appendChild(lightImg);
      item.appendChild(darkImg);
      this.track.appendChild(item);
    });
  }
  
  createIndicators() {
    this.indicatorsContainer.innerHTML = '';
    
    this.images.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => this.goToSlide(index));
      this.indicatorsContainer.appendChild(indicator);
    });
  }
  
  bindEvents() {
    this.prevBtn.addEventListener('click', () => this.previousSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    // Pause auto-scroll on user interaction
    this.container.addEventListener('mouseenter', () => {
      this.isUserInteracting = true;
      this.stopAutoScroll();
    });
    
    this.container.addEventListener('mouseleave', () => {
      this.isUserInteracting = false;
      this.startAutoScroll();
    });
    
    // Keyboard navigation
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.previousSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.nextSlide();
      }
    });
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.updateIndicators();
    this.resetAutoScroll();
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateCarousel();
    this.updateIndicators();
    this.resetAutoScroll();
  }
  
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateCarousel();
    this.updateIndicators();
    this.resetAutoScroll();
  }
  
  updateCarousel() {
    const translateX = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
  }
  
  updateIndicators() {
    const indicators = this.indicatorsContainer.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
  }
  
  startAutoScroll() {
    if (this.isUserInteracting) return;
    
    this.stopAutoScroll();
    this.autoScrollInterval = setInterval(() => {
      if (!this.isUserInteracting) {
        this.nextSlide();
      }
    }, this.autoScrollDelay);
  }
  
  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }
  
  resetAutoScroll() {
    this.stopAutoScroll();
    setTimeout(() => this.startAutoScroll(), 1000);
  }
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize on the homepage
  if (document.getElementById('heroCarousel')) {
    new HeroCarousel('heroCarousel');
  }
});

// Re-initialize GLightbox after carousel is created
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (typeof GLightbox !== 'undefined') {
      GLightbox({
        selector: '.glightbox'
      });
    }
  }, 100);
});