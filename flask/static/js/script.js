// HERO
  const carousel = document.querySelector('.carousel');
  const images = [
    'hero1.jpg',
    'hero2.jpg',
    'hero3.jpg'
  ];
  let currentImage = 0;

  function changeBackground() {

    carousel.style.backgroundImage = `url(static/images/hero/${images[currentImage]})`;

    currentImage = (currentImage + 1) % images.length;
  }

  setInterval(changeBackground, 5000);

  changeBackground();

// BONECO

  // BONECOS SCROLL
  document.addEventListener('DOMContentLoaded', () => {
    const osdois = document.getElementById('osdois'); // Seleciona o elemento

    // Função para ativar a animação
    const ativarAnimacao = () => {
        osdois.classList.add('animate'); // Adiciona a classe que inicia a animação
    };

    // Configura o Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // Verifica se está visível
                ativarAnimacao();
                observer.unobserve(entry.target); // Para de observar após a ativação
            }
        });
    }, { threshold: 0.1 }); // Ativa quando 10% do elemento estiver visível

    // Inicia a observação
    observer.observe(osdois);
  });

  // NUVEM SCROLL
    // Seleciona as nuvens e a div que as contém
  const nuvem1 = document.getElementById('nuvem1');
  const nuvem2 = document.getElementById('nuvem2');
  const nuvem3 = document.getElementById('nuvem3');
  const divTudo = document.getElementById('div_tudo');

  // Função para ativar animações nas nuvens
  function ativarAnimacao() {
      nuvem1.classList.add('animate');
      nuvem2.classList.add('animate');
      nuvem3.classList.add('animate');
  }

  // Configura o Intersection Observer
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              ativarAnimacao();
              observer.unobserve(entry.target); // Para de observar após a animação começar
          }
      });
  }, { threshold: 0.1 }); // Quando 10% da div estiver visível

  // Seleciona o elemento .osdois
  const osdois = document.getElementById('osdois');

  observer.observe(divTudo);

  // ANIMAÇÃO
  document.addEventListener('DOMContentLoaded', () => {
    const osdois = document.getElementById('osdois');
    const spriteElement = document.getElementById('sprite');
  const empurrandoFrames = [
    '../static/images/empurrando/1.png',
    '../static/images/empurrando/2.png',
    '../static/images/empurrando/3.png',
    '../static/images/empurrando/4.png',
    '../static/images/empurrando/5.png',
    '../static/images/empurrando/6.png',
    '../static/images/empurrando/7.png',
    '../static/images/empurrando/8.png',
    '../static/images/empurrando/9.png',
    '../static/images/empurrando/10.png',
    '../static/images/empurrando/11.png',
    '../static/images/empurrando/12.png',
    '../static/images/empurrando/13.png',
    '../static/images/empurrando/14.png',
    '../static/images/empurrando/15.png',
    '../static/images/empurrando/16.png',
    '../static/images/empurrando/17.png',
    '../static/images/empurrando/18.png',
    '../static/images/empurrando/19.png',
    '../static/images/empurrando/20.png',
    '../static/images/empurrando/21.png',
    '../static/images/empurrando/22.png',
    '../static/images/empurrando/23.png',
    '../static/images/empurrando/24.png',
    '../static/images/empurrando/25.png',
    '../static/images/empurrando/26.png',
    '../static/images/empurrando/27.png',
    '../static/images/empurrando/28.png',
    '../static/images/empurrando/29.png',
    '../static/images/empurrando/30.png',
    '../static/images/empurrando/31.png',
    '../static/images/empurrando/32.png',

  ];

  const doublebicepsFrames = [
    '../static/images/doublebiceps/1.1.png',
    '../static/images/doublebiceps/1.2.png',
    '../static/images/doublebiceps/1.3.png',
    '../static/images/doublebiceps/1.4.png',
    '../static/images/doublebiceps/1.5.png',
    '../static/images/doublebiceps/1.6.png',
    '../static/images/doublebiceps/1.7.png',
    '../static/images/doublebiceps/1.8.png',
    '../static/images/doublebiceps/1.9.png',
    '../static/images/doublebiceps/1.10.png',
    '../static/images/doublebiceps/1.11.png',
    '../static/images/doublebiceps/1.12.png',
    '../static/images/doublebiceps/1.13.png',
    '../static/images/doublebiceps/1.14.png',
    '../static/images/doublebiceps/1.15.png',
    '../static/images/doublebiceps/1.16.png',
    '../static/images/doublebiceps/1.17.png',
    '../static/images/doublebiceps/1.18.png',
    '../static/images/doublebiceps/1.19.png',
    '../static/images/doublebiceps/1.20.png',

  ];

  const descansarFrames = [
    '../static/images/descansar/2.1.png',
    '../static/images/descansar/2.2.png',

  ];
  let currentEmpurrandoFrame = 0;  
  let currentDoubleBicepsFrame = 0; 
  let currentDescansarFrame = 0;

  const fpsEmpurrando = 14;
  const fpsDoubleBiceps = 7;
  const fpsDescansar = 2;

  const intervalEmpurrando = 1000 / fpsEmpurrando;
  const intervalDoubleBiceps = 1000 / fpsDoubleBiceps;
  const intervalDescansar = 1000 / fpsDescansar;

  function animate(frames, currentFrame, interval) {
    spriteElement.src = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length; 
    return currentFrame;
  }

  function runAnimation(frames, currentFrame, interval, isDoubleBiceps = false, callback = null) {
    spriteElement.src = frames[currentFrame];
    spriteElement.style.bottom = isDoubleBiceps ? '-45px' : '-210px';
    currentFrame++;

    if (currentFrame < frames.length) {
        setTimeout(() => runAnimation(frames, currentFrame, interval, isDoubleBiceps, callback), interval);
    } else if (callback) {
        callback();
    }
  }

  function runInfiniteDescansarAnimation() {
    currentDescansarFrame = animate(descansarFrames, currentDescansarFrame, intervalDescansar);
    spriteElement.style.bottom = '-45px';
    setTimeout(runInfiniteDescansarAnimation, intervalDescansar);
  }

  function startSpriteAnimation() {
    const empurrandoAnimation = setInterval(() => {
        currentEmpurrandoFrame = animate(empurrandoFrames, currentEmpurrandoFrame, intervalEmpurrando);
    }, intervalEmpurrando);

    const switchTime = 10900; 

    setTimeout(() => {
        clearInterval(empurrandoAnimation); 
        currentDoubleBicepsFrame = 0; 
        runAnimation(doublebicepsFrames, currentDoubleBicepsFrame, intervalDoubleBiceps, true, () => {
            currentDescansarFrame = 0; 
            runInfiniteDescansarAnimation();
        });
    }, switchTime);
  }

  // Configura o Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // Verifica se está visível
            startSpriteAnimation(); // Inicia a animação
            observer.unobserve(entry.target); // Para de observar após iniciar
        }
    });
  }, { threshold: 0.1 }); // Ativa quando 10% do elemento estiver visível

  // Inicia a observação
  observer.observe(osdois);
  });

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
  darkground.style.display = "flex"
  document.body.style.overflow = "hidden";
  document.getElementById("avaliacao").scrollIntoView();
  

  
  modal.style.position = "fixed"
  modal.style.display = "flex"
  modal.style.top = "50%"
  modal.style.left = "50%"
  modal.style.transform = "translate(-50%,-50%)"

  darkground.addEventListener("click", (event) => {
    if (event.target === darkground) {
      darkground.style.display = "none"; 
      modal.style.display = "none"; 
      document.body.style.overflow = "auto";
    }
  });
  
})


// SOBRE NÓS
const content = [
  { nome:'João Pilger', text: 'Estudante de 16 anos do Intituto Federal Catarinense Campus Concórdia, no curso de informática para internet. Atuando como líder do grupo 5 durante o segundo semestre letivo. Resposável pela seção do carrossel de informações, estilização primária do formulário de avaliação e cooperando no desenvolvimento do sistema prescritor de treinos com Inteligência Artificial.', img: '../static/images/integrantes/pilger.png' },
  { nome: 'João Pramio', text: 'Sou estudante de 15 anos no Instituto Federal Catarinense Campus Concórdia, no curso de Informática. No momento, sou responsável por uma seção de um projeto que envolve o desenvolvimento de animações em sprites e trabalho no backend, criando o sistema. Entre minhas funções, destaco a criação de um boneco interativo que empurra uma caixa de informação, utilizando técnicas de animação e programação para oferecer uma experiência dinâmica e funcional.', img: '../static/images/integrantes/pramio1.jpg' },
  { nome: 'Bruno Gelain', text: 'Estudante de 16 anos do Instituto Federal Catarinense Campus Concórdia,  no curso de informática. Responsável por esta seção "Sobre Nós" e pelo footer. Ao longo do curso desenvolvi habilidades diversas na área e estou sempre buscando aprender sobre novas ferramentas.', img: '../static/images/integrantes/bruno.png' },
  { nome: 'Gabriel Jappe', text: 'Discente do IFC Campus Concórdia - Informática para a Internet. Líder do Grupo 5 durante o primeiro semestre de 2024. Corretor ortográfico e desenvolvedor do projeto. Responsável pela escrita e correção dos textos do website, e encarregado da integração do sistema prescritor de treinos com a Inteligência Artificial. Responsável por parte da comunicação backend-frontend do projeto, manipulando os dados e transferindo-os para o servidor, para que assim, sejam analisados e tratados.', img: '../static/images/integrantes/jappe.jpg' },
  { nome: 'Carlos Mior', text: 'Estudante do Instituto Federal Catarinense Campus Concórdia - Curso Técnico Em Informática para a Internet, estou aprendendo sobre programação e sistemas de computadores, sempre atrás de uma oportunidade de me aprimorar. Desde meu ingresso no instituto, ganhei conhecimento em diversas áreas como a de criação de sites utilizando HTML, CSS e JavaScript, além da linguagem de programação Python.', img: '../static/images/integrantes/carlos.png' },
  { nome: 'Murilo Jochkeck', text: 'Sou discente no Instituto Federal Catarinense, Campus Concórdia, no curso técnico integrado em Informática para Internet, onde estou adquirindo uma base sólida de conhecimento em programação, desenvolvimento web e design de interfaces. Desde que comecei o curso, tive a oportunidade de aprender diversas linguagens de programação, como HTML, CSS, JavaScript, e também como aplicar essas ferramentas em projetos práticos.', img: '../static/images/integrantes/murilo.jpg' }
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
