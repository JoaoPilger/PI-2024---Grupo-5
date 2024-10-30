const carousel = document.querySelector('.carousel');
const images = [
  'hero1.jpg',
  'hero2.jpg',
  'hero3.jpg',
  'hero4.jpg'
];
let currentImage = 0;

function changeBackground() {
  // Atualiza o background-image
  carousel.style.backgroundImage = `url(${images[currentImage]})`;

  // Define o próximo índice (circular)
  currentImage = (currentImage + 1) % images.length;
}

// Intervalo de alternância
setInterval(changeBackground, 5000);

// Exibe a primeira imagem ao carregar a página
changeBackground();
