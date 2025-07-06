document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    document.querySelectorAll('section').forEach(sec => {
      sec.style.display = 'none';
    });
    const target = document.querySelector(sectionId);
    if (target) {
      target.style.display = 'block';
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const viewBtn = document.querySelector('.btn[href="#projects"]');
if (viewBtn) {
  viewBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    const target = document.querySelector('#projects');
    if (target) {
      target.style.display = 'block';
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => {
    sec.style.display = 'none';
  });
  const home = document.getElementById('home');
  if (home) home.style.display = 'block';
});

