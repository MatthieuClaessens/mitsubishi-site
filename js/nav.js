document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuMobile = document.getElementById('menu-mobile');
  const menuIcon = menuToggle.querySelector('i');

  // Fonction pure pour basculer le menu
  const toggleMenu = () => {
    const isHidden = menuMobile.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars', isHidden);
    menuIcon.classList.toggle('fa-times', !isHidden);
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Fermer le menu après clic sur un lien
  menuMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuMobile.classList.add('hidden');
      menuIcon.classList.replace('fa-times', 'fa-bars');
    });
  });
});