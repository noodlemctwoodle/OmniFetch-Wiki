/**
 * OmniFetch Documentation - Privacy Consent JavaScript
 * Enhanced interactions for Apple-style toggle switches
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initConsentEnhancements);
    } else {
        initConsentEnhancements();
    }

    function initConsentEnhancements() {
        // Add haptic-like feedback for toggle switches
        enhanceToggleSwitches();
        
        // Add smooth scroll behavior for settings panel
        enhanceSettingsPanel();
        
        // Add keyboard navigation improvements
        enhanceKeyboardNavigation();
        
        // Add touch gesture support for mobile
        enhanceTouchInteractions();
        
        // Monitor theme changes for smooth transitions
        monitorThemeChanges();
    }

    /**
     * Enhance toggle switches with haptic-like feedback
     */
    function enhanceToggleSwitches() {
        const toggles = document.querySelectorAll('.md-consent__settings input[type="checkbox"]');
        
        toggles.forEach(toggle => {
            // Add subtle scale animation on click
            toggle.addEventListener('click', function(e) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
                
                // Trigger haptic feedback on supported devices
                if (window.navigator && window.navigator.vibrate) {
                    window.navigator.vibrate(10);
                }
                
                // Add satisfying sound effect (optional, requires audio file)
                playToggleSound(this.checked);
            });
            
            // Add focus ring animation
            toggle.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            toggle.addEventListener('blur', function() {
                this.parentElement.classList.remove('focused');
            });
        });
    }

    /**
     * Enhance settings panel with smooth reveal
     */
    function enhanceSettingsPanel() {
        const settingsToggle = document.querySelector('input[type="checkbox"]:not(.md-consent__settings input)');
        const settingsPanel = document.querySelector('.md-consent__settings');
        
        if (settingsToggle && settingsPanel) {
            settingsToggle.addEventListener('change', function() {
                if (this.checked) {
                    // Smooth scroll to settings
                    setTimeout(() => {
                        settingsPanel.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest' 
                        });
                    }, 300);
                }
            });
        }
    }

    /**
     * Enhance keyboard navigation
     */
    function enhanceKeyboardNavigation() {
        const consentDialog = document.querySelector('.md-consent__inner');
        
        if (consentDialog) {
            // Trap focus within dialog when open
            const focusableElements = consentDialog.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            
            if (focusableElements.length > 0) {
                const firstFocusable = focusableElements[0];
                const lastFocusable = focusableElements[focusableElements.length - 1];
                
                // Focus first element when dialog opens
                if (consentDialog.style.display !== 'none') {
                    firstFocusable.focus();
                }
                
                // Handle tab key for focus trap
                consentDialog.addEventListener('keydown', function(e) {
                    if (e.key === 'Tab') {
                        if (e.shiftKey) {
                            if (document.activeElement === firstFocusable) {
                                e.preventDefault();
                                lastFocusable.focus();
                            }
                        } else {
                            if (document.activeElement === lastFocusable) {
                                e.preventDefault();
                                firstFocusable.focus();
                            }
                        }
                    }
                    
                    // Close on Escape key
                    if (e.key === 'Escape') {
                        const closeButton = consentDialog.querySelector('.md-button:not(.md-button--primary)');
                        if (closeButton) {
                            closeButton.click();
                        }
                    }
                });
            }
        }
        
        // Space bar to toggle switches
        const toggles = document.querySelectorAll('.md-consent__settings input[type="checkbox"]');
        toggles.forEach(toggle => {
            toggle.parentElement.addEventListener('keydown', function(e) {
                if (e.key === ' ' && e.target === this) {
                    e.preventDefault();
                    toggle.click();
                }
            });
        });
    }

    /**
     * Enhance touch interactions for mobile
     */
    function enhanceTouchInteractions() {
        const isTouchDevice = 'ontouchstart' in window;
        
        if (isTouchDevice) {
            const cards = document.querySelectorAll('.md-consent__settings label');
            
            cards.forEach(card => {
                let touchStartY = 0;
                let touchStartX = 0;
                
                card.addEventListener('touchstart', function(e) {
                    touchStartY = e.touches[0].clientY;
                    touchStartX = e.touches[0].clientX;
                    this.classList.add('touch-active');
                }, { passive: true });
                
                card.addEventListener('touchend', function(e) {
                    this.classList.remove('touch-active');
                    
                    // Detect swipe gesture for toggle
                    const touchEndX = e.changedTouches[0].clientX;
                    const swipeDistance = touchEndX - touchStartX;
                    const toggle = this.querySelector('input[type="checkbox"]');
                    
                    if (Math.abs(swipeDistance) > 50 && toggle) {
                        if (swipeDistance > 0 && !toggle.checked) {
                            // Swipe right to enable
                            toggle.click();
                        } else if (swipeDistance < 0 && toggle.checked) {
                            // Swipe left to disable
                            toggle.click();
                        }
                    }
                }, { passive: true });
                
                card.addEventListener('touchcancel', function() {
                    this.classList.remove('touch-active');
                }, { passive: true });
            });
        }
    }

    /**
     * Monitor theme changes for smooth transitions
     */
    function monitorThemeChanges() {
        // Observe theme changes
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'data-md-color-scheme') {
                    // Add transition class during theme change
                    document.body.classList.add('theme-transitioning');
                    setTimeout(() => {
                        document.body.classList.remove('theme-transitioning');
                    }, 300);
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-md-color-scheme']
        });
    }

    /**
     * Play toggle sound effect (optional enhancement)
     */
    function playToggleSound(isOn) {
        // This is optional - would require audio files to be added
        // Uncomment if you want to add sound effects
        /*
        try {
            const audio = new Audio();
            audio.volume = 0.2;
            
            if (isOn) {
                audio.src = '/assets/sounds/toggle-on.mp3';
            } else {
                audio.src = '/assets/sounds/toggle-off.mp3';
            }
            
            audio.play().catch(() => {
                // Silently fail if audio playback is blocked
            });
        } catch (e) {
            // Audio not supported
        }
        */
    }

    /**
     * Add smooth parallax effect to dialog on scroll (desktop only)
     */
    if (window.innerWidth > 1024) {
        let ticking = false;
        
        function updateDialogPosition() {
            const dialog = document.querySelector('.md-consent__inner');
            if (dialog && dialog.style.display !== 'none') {
                const scrollY = window.scrollY;
                const parallaxSpeed = 0.5;
                const translateY = scrollY * parallaxSpeed;
                
                dialog.style.transform = `translateX(-50%) translateY(${translateY}px)`;
            }
            
            ticking = false;
        }
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(updateDialogPosition);
                ticking = true;
            }
        });
    }

    /**
     * Add ripple effect to buttons
     */
    function addRippleEffect() {
        const buttons = document.querySelectorAll('.md-consent__controls .md-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                ripple.classList.add('ripple');
                
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Initialize ripple effect
    addRippleEffect();

    /**
     * Smooth dialog animations on open/close
     */
    function observeDialogVisibility() {
        const dialog = document.querySelector('.md-consent__inner');
        const overlay = document.querySelector('.md-consent__overlay');
        
        if (dialog) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Dialog is visible
                        document.body.style.overflow = 'hidden';
                    } else {
                        // Dialog is hidden
                        document.body.style.overflow = '';
                    }
                });
            });
            
            observer.observe(dialog);
        }
    }

    observeDialogVisibility();

    /**
     * Add CSS for ripple effect and other dynamic styles
     */
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .theme-transitioning * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
        }
        
        .touch-active {
            transform: scale(0.98);
            opacity: 0.8;
        }
        
        .focused {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.4);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(0, 122, 255, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(0, 122, 255, 0);
            }
        }
    `;
    document.head.appendChild(style);

})();