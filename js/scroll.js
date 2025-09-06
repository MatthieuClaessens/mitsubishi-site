document.addEventListener('DOMContentLoaded', () => {
  // Attendre que GSAP soit complètement chargé
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    initHorizontalScroll();
  } else {
    console.error('GSAP ou ScrollTrigger non chargé');
  }
});

function initHorizontalScroll() {
  const container = document.querySelector("#horizontal-scroll");
  const wrapper = document.querySelector(".horizontal-wrapper");
  
  if (!container || !wrapper) {
    console.error('Éléments du scroll horizontal introuvables');
    return;
  }

  // Calcul de la largeur totale de défilement
  const totalScrollWidth = container.scrollWidth;
  const viewportWidth = window.innerWidth;
  const scrollDistance = totalScrollWidth - viewportWidth;

  // Configuration du scroll horizontal
  gsap.to(container, {
    x: () => -(totalScrollWidth - viewportWidth),
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => `+=${scrollDistance}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      markers: false// À désactiver en production
    }
  });

  // Rafraîchissement au resize
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
}