// Carrossel header ======================================================================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
  // Oculta a imagem atual
  slides[currentSlide].classList.remove('active');

  // Atualiza o índice da próxima imagem
  currentSlide = (currentSlide + 1) % totalSlides;

  // Exibe a próxima imagem
  slides[currentSlide].classList.add('active');
}

// Alterna a imagem após algum tempo
setInterval(showNextSlide, 5000);
