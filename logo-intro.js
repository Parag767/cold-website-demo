// Logo Intro Animation for COLD Website
class LogoIntro {
  constructor() {
    this.init();
  }

  init() {
    // Create the intro overlay
    this.createIntroOverlay();
    
    // Start the animation sequence
    this.startAnimation();
    
    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden';
    document.body.classList.add('intro-active');
  }

  createIntroOverlay() {
    // Create the main overlay container
    this.overlay = document.createElement('div');
    this.overlay.id = 'logo-intro-overlay';
    this.overlay.className = 'logo-intro-overlay';
    
    // Create the logo container
    this.logoContainer = document.createElement('div');
    this.logoContainer.id = 'logo-container';
    this.logoContainer.className = 'logo-container';

    // Create the logo image
    this.logoImage = document.createElement('img');
    this.logoImage.id = 'logo-image';
    this.logoImage.src = 'logo.png.png';
    this.logoImage.alt = 'COLD Logo';
    this.logoImage.className = 'logo-image';

    // Assemble the elements
    this.logoContainer.appendChild(this.logoImage);
    this.overlay.appendChild(this.logoContainer);
    document.body.appendChild(this.overlay);

    // Show the overlay immediately
    this.overlay.style.opacity = '1';
  }

  startAnimation() {
    // Animation sequence: fade in (1.5s) + hold (1s) + fade out (1s) = 3.5s total
    
    // Start logo animation after a brief delay
    setTimeout(() => {
      this.logoContainer.classList.add('animate-in');
    }, 100);

    // After 2.5s (1.5s fade in + 1s hold), start fade out
    setTimeout(() => {
      this.logoContainer.classList.remove('animate-in');
      this.logoContainer.classList.add('animate-out');
    }, 2500);

    // After 3.5s total, fade out the overlay
    setTimeout(() => {
      this.overlay.classList.add('fade-out');
    }, 3500);

    // After 4.5s, remove the overlay and restore scrolling
    setTimeout(() => {
      this.cleanup();
    }, 4500);
  }

  cleanup() {
    // Remove the overlay
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
    
    // Restore scrolling
    document.body.style.overflow = 'unset';
    document.body.classList.remove('intro-active');
    
    // Trigger any completion callbacks
    if (this.onComplete) {
      this.onComplete();
    }
  }

  onComplete(callback) {
    this.onComplete = callback;
  }
}

// Initialize the logo intro when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Check if intro has already been shown (using localStorage)
  const introShown = localStorage.getItem('cold-intro-shown');
  
  if (!introShown) {
    // Create and start the logo intro
    const logoIntro = new LogoIntro();
    
    // Mark intro as shown
    localStorage.setItem('cold-intro-shown', 'true');
    
    // Optional: Add completion callback
    logoIntro.onComplete(() => {
      console.log('Logo intro animation completed');
    });
  }
});

// Function to reset intro (for testing)
function resetLogoIntro() {
  localStorage.removeItem('cold-intro-shown');
  location.reload();
}
