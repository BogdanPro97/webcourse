// ===== TOGGLE POST CONTENT =====
function togglePost(btn) {
  const postFull = btn.nextElementSibling;
  const isOpen = postFull.classList.contains('open');

  if (isOpen) {
    postFull.classList.remove('open');
    postFull.classList.add('hidden');
    btn.textContent = 'Читати далі ↓';
  } else {
    postFull.classList.remove('hidden');
    postFull.classList.add('open');
    btn.textContent = 'Згорнути ↑';
  }
}

// ===== SMOOTH SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.post-card, .tip-card, .about-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? '#e8a96a'
      : 'rgba(255,255,255,0.75)';
  });
});
