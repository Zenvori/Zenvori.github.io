document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const note = document.querySelector('.hero-note');
window.addEventListener('pointermove', event => {
  if (!note || window.innerWidth < 801) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 5;
  const y = (event.clientY / window.innerHeight - 0.5) * 5;
  note.style.transform = `rotate(5deg) translate(${x}px, ${y}px)`;
});
