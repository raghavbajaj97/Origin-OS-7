const modal = document.getElementById('modal');
const open = document.getElementById('openImage');
const close = document.getElementById('closeImage');

open.addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
});
close.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
});
modal.addEventListener('click', (e) => {
  if(e.target === modal) close.click();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.classList.contains('open')) close.click();
});

const links = [...document.querySelectorAll('.sidebar a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+entry.target.id));
    }
  });
},{rootMargin:'-30% 0px -60% 0px'});
sections.forEach(s => observer.observe(s));
