  const slides = document.getElementById('carousel-slides');
  function goToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }