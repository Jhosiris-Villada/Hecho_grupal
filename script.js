// Cerrar menú desplegable al hacer clic en cualquier parte fuera de él
window.addEventListener('click', function(event) {
  const dropdowns = document.getElementsByClassName('dropdown-content');
  for (let i = 0; i < dropdowns.length; i++) {
    const dropdown = dropdowns[i];
    if (!event.target.matches('#user-button') && !dropdown.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  }
});

  // Lógica para el carrusel
  // ... Código del primer carrusel ...
// Variables globales
const carouselSlider = document.querySelector('.carousel-slider');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const slideWidth = carouselSlides[0].offsetWidth;
let slideIndex = 0;

// Función para mover el carrusel a la posición actual
function moveCarousel() {
  carouselSlider.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

// Función para avanzar al siguiente slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= carouselSlides.length) {
    slideIndex = 0;
  }
  moveCarousel();
}

// Función para retroceder al slide anterior
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = carouselSlides.length - 1;
  }
  moveCarousel();
}

// Event listeners para los botones de navegación
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);



// Variables globales para el segundo carrusel
const carouselSlider2 = document.querySelectorAll('.carousel-slider')[1];
const carouselSlides2 = carouselSlider2.querySelectorAll('.carousel-slide');
const prevButton2 = document.querySelectorAll('.carousel-prev')[1];
const nextButton2 = document.querySelectorAll('.carousel-next')[1];
const slideWidth2 = carouselSlides2[0].offsetWidth;
let slideIndex2 = 0;

// Funciones para el segundo carrusel
function moveCarousel2() {
  carouselSlider2.style.transform = `translateX(${-slideWidth2 * slideIndex2}px)`;
}

function nextSlide2() {
  slideIndex2++;
  if (slideIndex2 >= carouselSlides2.length) {
    slideIndex2 = 0;
  }
  moveCarousel2();
}

function prevSlide2() {
  slideIndex2--;
  if (slideIndex2 < 0) {
    slideIndex2 = carouselSlides2.length - 1;
  }
  moveCarousel2();
}

// Event listeners para el segundo carrusel
nextButton2.addEventListener('click', nextSlide2);
prevButton2.addEventListener('click', prevSlide2);

