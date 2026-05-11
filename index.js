// Animation boutons

const boutons = document.querySelectorAll('.cbou');

boutons.forEach((bouton) => {

  bouton.addEventListener('mouseenter', () => {
    bouton.style.transform = 'scale(1.05)';
    bouton.style.transition = '0.3s';
  });

  bouton.addEventListener('mouseleave', () => {
    bouton.style.transform = 'scale(1)';
  });

});

// Apparition sections

const sections = document.querySelectorAll('section');

sections.forEach((section) => {
  section.classList.add('cache');
});

const observer = new IntersectionObserver((entrees) => {

  entrees.forEach((entree) => {

    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
    }

  });

});

sections.forEach((section) => {
  observer.observe(section);
});