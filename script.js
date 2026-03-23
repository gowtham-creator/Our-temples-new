// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    // Toggle clicked item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.borderBottom = '1px solid rgba(195, 196, 197, 0.3)';
  } else {
    navbar.style.borderBottom = 'none';
  }
});

// Simple parallax effect on feature images
window.addEventListener('scroll', () => {
  document.querySelectorAll('.parallax-image img').forEach(img => {
    const rect = img.parentElement.getBoundingClientRect();
    const scrollPercent = (rect.top + rect.height / 2) / window.innerHeight;
    const offset = (scrollPercent - 0.5) * -80;
    img.style.transform = `translateY(${offset}px)`;
  });
});

// Fade-in on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section > .container, section > div').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Make navbar visible immediately
document.querySelector('.navbar-container').style.opacity = '1';
document.querySelector('.navbar-container').style.transform = 'none';
