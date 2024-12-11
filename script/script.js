// HERO
const carousel = document.querySelector('.carousel');
const images = [
  'hero1.jpg',
  'hero2.jpg',
  'hero3.jpg'
];
let currentImage = 0;

function changeBackground() {

  carousel.style.backgroundImage = `url(midia/hero/${images[currentImage]})`;

  currentImage = (currentImage + 1) % images.length;
}

setInterval(changeBackground, 5000);

changeBackground();

// BONECO

// CARROSSEL MEIO
const slide = document.getElementById("slide");

let index = 0

function mudaImg1() {
    index = (index + 1) % 3
    slide.style.transform = `translateX(${-index * 580}px)`
}

function mudaImg2() {
    index = (index - 1 + 3) % 3
    slide.style.transform = `translateX(${-index * 590}px)`
}

setInterval(mudaImg1, 10000)

// IA
document.addEventListener('DOMContentLoaded', () => {
  const puxador = document.querySelector('.puxador');
  const insightIA = document.querySelector('.insight_ia');

  let arrastando = false;
  let startY = 0;
  let altura_atual = 0; // armazena a altura atual da div
  const dragSensitivity = 1; // sensibilidade 1 pra acompanhar o mouse
  const maxHeight = 462; // tamanho máximo da div 

  // atualizaa a altura da div insight_ia
  function updateHeight(newHeight) {
      insightIA.style.height = `${newHeight}px`;
  }

  // função de throttle para limitar a quantidade de eventos mousemove
  function throttle(func, limit) {
      let inThrottle;
      return function() {
          const args = arguments;
          const context = this;
          if (!inThrottle) {
              func.apply(context, args);
              inThrottle = true;
              setTimeout(() => inThrottle = false, limit);
          }
      };
  }

  // pega o início do arraste (mousedown)
  puxador.addEventListener('mousedown', (e) => {
      arrastando = true;
      startY = e.clientY;
      altura_atual = parseInt(window.getComputedStyle(insightIA).height, 10); // pega a altura atual da div
      puxador.style.cursor = 'grabbing'; // muda o cursor
      insightIA.style.transition = 'none'; // desativa transições durante o arraste
  });

  // calcula a distância arrastada e atualiza a altura (mousemove)
  document.addEventListener('mousemove', throttle((e) => {
      if (arrastando) {
          const distance = (e.clientY - startY) * dragSensitivity;
          const newHeight = Math.min(maxHeight, Math.max(0, altura_atual + distance));
          const elemento = document.querySelector('.ia');
          elemento.style.userSelect = 'none';

          // atualiza a altura da div insight_ia usando requestAnimationFrame
          requestAnimationFrame(() => updateHeight(newHeight));
      }
  }, 0)); // limitador de FPS

  document.addEventListener('mouseup', () => {
      arrastando = false;
      puxador.style.cursor = 'grab'; // restaura o cursor ao soltar
      insightIA.style.transition = 'height 0.3s ease'; // transição para qualquer ajuste final na altura
      const elemento = document.querySelector('.ia');
      elemento.style.userSelect = 'auto';
  });
});

// AVALIAÇÃO
const button = document.getElementById("buttonAval")

button.addEventListener("click", () =>{
  const modal = document.getElementById("modal")
  const darkground = document.getElementById("darkground")

  darkground.style.backgroundColor = "rgba(0, 0, 0, 0.4)"

  modal.style.display = "flex"
  modal.style.position = "fixed"
  modal.style.top = "50%"
  modal.style.left = "50%"
  modal.style.transform = "translate(-50%,-50%)"
})


// SOBRE NÓS
const content = [
  { nome:'João Pilger', text: 'Estudante de 16 anos do Intituto Federal Catarinense Campus Concórdia, no curso de informática para internet. Atuando como líder do grupo 5 durante o segundo semestre letivo. Resposável pela seção do carrossel de informações, estilização primária do formulário de avaliação e cooperando no desinvolvimento do sistema prescritor de treinos com Inteligência Artificial.', img: 'midia/integrantes/pilger.png' },
  { nome: 'João Pramio', text: 'Estudante de 16 anos do Instituto Federal Catarinense Campus Concórdia,  no curso de informática. Responsável pelo boneco.', img: 'midia/integrantes/pramio.png' },
  { nome: 'Bruno Gelain', text: 'Estudante de 16 anos do Instituto Federal Catarinense Campus Concórdia,  no curso de informática. Responsável por esta seção "Sobre Nós" e pelo footer.', img: 'midia/integrantes/bruno.png' },
  { nome: 'Gabriel Jappe', text: 'Discente do IFC Campus Concórdia - Informática para a Internet. Ingressado em 1ª colocação à Instituição. Corretor ortográfico e desenvolvedor do projeto. Responsável pela escrita e correção dos textos do website, e encarregado da integração do sistema prescritor de treinos com a Inteligência Artificial.', img: 'midia/integrantes/jappe.jpg' },
  { nome: 'Carlos Mior', text: 'Texto Carlos', img: 'midia/integrantes/carlos.png' },
  { nome: 'Murilo Jochkeck', text: 'Texto Murilo', img: 'midia/integrantes/murilo.png' }
];

let currentIndex = 0;

function updateContent() {
  const nomeElement = document.getElementById('sobreNome');
  const textoElement = document.getElementById('sobreTexto');
  const imageElement = document.getElementById('sobreIntegrante');
  
  nomeElement.textContent = content[currentIndex].nome;
  textoElement.textContent = content[currentIndex].text;
  imageElement.src = content[currentIndex].img;

}

function nextItem() {
  currentIndex = (currentIndex + 1) % content.length;
  updateContent();
}

function previousItem() {
  currentIndex = (currentIndex - 1 + content.length) % content.length;
  updateContent();
}