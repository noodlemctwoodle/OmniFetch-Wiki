/**
 * OmniFetch Documentation - Hero Image Carousel
 * Infinite scrolling carousel with light/dark theme support
 */

class HeroCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.warn('Container not found:', containerId);
      return;
    }
    
    this.track = this.container.querySelector('.hero-carousel-track');
    this.prevBtn = this.container.querySelector('.carousel-prev');
    this.nextBtn = this.container.querySelector('.carousel-next');
    this.indicatorsContainer = this.container.querySelector('.carousel-indicators');
    
    // Verify essential elements exist
    if (!this.track || !this.prevBtn || !this.nextBtn || !this.indicatorsContainer) {
      console.error('Missing required carousel elements for:', containerId);
      return;
    }
    
    this.currentIndex = 0;
    this.autoScrollInterval = null;
    this.autoScrollDelay = 4000; // 4 seconds
    this.isUserInteracting = false;
    
    // Define image sets with light/dark variants
    this.images = [
      {
        light: 'assets/images/service-discover/discover-light.png',
        dark: 'assets/images/service-discover/discover-dark.png',
        title: 'OmniFetch Discover',
        alt: 'OmniFetch Discover Screen'
      },
      {
        light: 'assets/images/service-discover/discover-collections-light.png',
        dark: 'assets/images/service-discover/discover-collections-dark.png',
        title: 'Collections View',
        alt: 'OmniFetch Collections Screen'
      },
      {
        light: 'assets/images/service-discover/discover-show-light.png',
        dark: 'assets/images/service-discover/discover-show-dark.png',
        title: 'Show Details',
        alt: 'OmniFetch Show Details Screen'
      },
      {
        light: 'assets/images/service-sonarr/sonarr-calendar-light.png',
        dark: 'assets/images/service-sonarr/sonarr-calendar-dark.png',
        title: 'Sonarr Calendar',
        alt: 'Sonarr Calendar View'
      },
      {
        light: 'assets/images/service-sonarr/sonarr-library-light.png',
        dark: 'assets/images/service-sonarr/sonarr-library-dark.png',
        title: 'Sonarr Library',
        alt: 'Sonarr Library View'
      },
      {
        light: 'assets/images/service-sonarr/sonarr-seasons-light.png',
        dark: 'assets/images/service-sonarr/sonarr-seasons-dark.png',
        title: 'Season Details',
        alt: 'Sonarr Season Details'
      },
      {
        light: 'assets/images/service-radarr/radarr-calendar-light.png',
        dark: 'assets/images/service-radarr/radarr-calendar-dark.png',
        title: 'Radarr Calendar',
        alt: 'Radarr Calendar View'
      },
      {
        light: 'assets/images/service-radarr/radarr-library-light.png',
        dark: 'assets/images/service-radarr/radarr-library-dark.png',
        title: 'Radarr Library',
        alt: 'Radarr Library View'
      },
      {
        light: 'assets/images/service-lidarr/lidarr-library-light.png',
        dark: 'assets/images/service-lidarr/lidarr-library-dark.png',
        title: 'Lidarr Library',
        alt: 'Lidarr Music Library'
      },
      {
        light: 'assets/images/service-lidarr/lidarr-albums-light.png',
        dark: 'assets/images/service-lidarr/lidarr-albums-dark.png',
        title: 'Album View',
        alt: 'Lidarr Album Details'
      },
      {
        light: 'assets/images/service-jellyseerr/jellyseerr-requests-light.png',
        dark: 'assets/images/service-jellyseerr/jellyseerr-requests-dark.png',
        title: 'Media Requests',
        alt: 'Jellyseerr Requests View'
      },
      {
        light: 'assets/images/service-jellyseerr/jellyseerr-request-light.png',
        dark: 'assets/images/service-jellyseerr/jellyseerr-request-dark.png',
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

// Simple Carousel class for notification setup with infinite scroll
class SimpleCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.warn('Container not found:', containerId);
      return;
    }
    
    this.track = this.container.querySelector('.hero-carousel-track');
    this.prevBtn = this.container.querySelector('.carousel-prev');
    this.nextBtn = this.container.querySelector('.carousel-next');
    this.indicators = this.container.querySelectorAll('.carousel-indicator');
    
    // Verify essential elements exist
    if (!this.track || !this.prevBtn || !this.nextBtn) {
      console.error('Missing required carousel elements for:', containerId);
      return;
    }
    
    this.currentIndex = 0;
    this.totalSlides = this.indicators.length;
    this.isTransitioning = false;
    
    this.init();
  }
  
  init() {
    this.createInfiniteLoop();
    this.bindEvents();
    this.updateCarousel();
  }
  
  createInfiniteLoop() {
    // Clone first and last slides for infinite effect
    const slides = this.track.querySelectorAll('.hero-carousel-item');
    
    // Safety check: ensure slides exist before cloning
    if (!slides || slides.length === 0) {
      console.warn('No slides found for carousel:', this.container.id);
      return;
    }
    
    const firstSlideClone = slides[0].cloneNode(true);
    const lastSlideClone = slides[slides.length - 1].cloneNode(true);
    
    // Add clones
    this.track.appendChild(firstSlideClone);
    this.track.insertBefore(lastSlideClone, slides[0]);
    
    // Adjust initial position to account for cloned first slide
    this.currentIndex = 1;
    this.track.style.transform = `translateX(-100%)`;
  }
  
  bindEvents() {
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index + 1));
    });
    
    // Handle transition end for infinite scroll
    this.track.addEventListener('transitionend', () => {
      this.handleTransitionEnd();
    });
  }
  
  updateCarousel(smooth = true) {
    if (smooth) {
      this.track.style.transition = 'transform 0.5s ease-in-out';
    } else {
      this.track.style.transition = 'none';
    }
    
    const translateX = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
    
    // Update indicators (adjust for clone offset)
    const actualIndex = this.currentIndex - 1;
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === actualIndex);
    });
  }
  
  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex++;
    this.updateCarousel();
  }
  
  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex--;
    this.updateCarousel();
  }
  
  goToSlide(index) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.currentIndex = index;
    this.updateCarousel();
  }
  
  handleTransitionEnd() {
    this.isTransitioning = false;
    
    // Handle infinite loop
    if (this.currentIndex === 0) {
      // We're at the cloned last slide, jump to real last slide
      this.currentIndex = this.totalSlides;
      this.updateCarousel(false);
    } else if (this.currentIndex === this.totalSlides + 1) {
      // We're at the cloned first slide, jump to real first slide
      this.currentIndex = 1;
      this.updateCarousel(false);
    }
  }
}

// Initialize carousels when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize homepage hero carousel
  if (document.getElementById('heroCarousel')) {
    new HeroCarousel('heroCarousel');
  }
  
  // Initialize notification setup carousel
  if (document.getElementById('notificationCarousel')) {
    new SimpleCarousel('notificationCarousel');
  }
  
  // Initialize push services carousel
  if (document.getElementById('pushServicesCarousel')) {
    new SimpleCarousel('pushServicesCarousel');
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