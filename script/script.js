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
    './midia/empurrando/1.png',
    './midia/empurrando/2.png',
    './midia/empurrando/3.png',
    './midia/empurrando/4.png',
    './midia/empurrando/5.png',
    './midia/empurrando/6.png',
    './midia/empurrando/7.png',
    './midia/empurrando/8.png',
    './midia/empurrando/9.png',
    './midia/empurrando/10.png',
    './midia/empurrando/11.png',
    './midia/empurrando/12.png',
    './midia/empurrando/13.png',
    './midia/empurrando/14.png',
    './midia/empurrando/15.png',
    './midia/empurrando/16.png',
    './midia/empurrando/17.png',
    './midia/empurrando/18.png',
    './midia/empurrando/19.png',
    './midia/empurrando/20.png',
    './midia/empurrando/21.png',
    './midia/empurrando/22.png',
    './midia/empurrando/23.png',
    './midia/empurrando/24.png',
    './midia/empurrando/25.png',
    './midia/empurrando/26.png',
    './midia/empurrando/27.png',
    './midia/empurrando/28.png',
    './midia/empurrando/29.png',
    './midia/empurrando/30.png',
    './midia/empurrando/31.png',
    './midia/empurrando/32.png',

  ];

  const doublebicepsFrames = [
    './midia/doublebiceps/1.1.png',
    './midia/doublebiceps/1.2.png',
    './midia/doublebiceps/1.3.png',
    './midia/doublebiceps/1.4.png',
    './midia/doublebiceps/1.5.png',
    './midia/doublebiceps/1.6.png',
    './midia/doublebiceps/1.7.png',
    './midia/doublebiceps/1.8.png',
    './midia/doublebiceps/1.9.png',
    './midia/doublebiceps/1.10.png',
    './midia/doublebiceps/1.11.png',
    './midia/doublebiceps/1.12.png',
    './midia/doublebiceps/1.13.png',
    './midia/doublebiceps/1.14.png',
    './midia/doublebiceps/1.15.png',
    './midia/doublebiceps/1.16.png',
    './midia/doublebiceps/1.17.png',
    './midia/doublebiceps/1.18.png',
    './midia/doublebiceps/1.19.png',
    './midia/doublebiceps/1.20.png',

  ];

  const descansarFrames = [
    './midia/descansar/2.1.png',
    './midia/descansar/2.2.png',

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

    modal.style.display = "flex"
    modal.style.position = "fixed"
    modal.style.top = "50%"
    modal.style.left = "50%"
    modal.style.transform = "translate(-50%,-50%)"
  })


// SOBRE NÓS
  const content = [
    { nome:'João Pilger', text: 'Estudante de 16 anos do Intituto Federal Catarinense Campus Concórdia, no curso de informática para internet. Atuando como líder do grupo 5 durante o segundo semestre letivo. Resposável pela seção do carrossel de informações, estilização primária do formulário de avaliação e cooperando no desinvolvimento do sistema prescritor de treinos com Inteligência Artificial.', img: 'midia/integrantes/pilger.png' },
    { nome: 'João Pramio', text: 'Estudante do Instituto Federal Catarinense - Campus Concórdia, no curso de Informática. Responsável pelo desenvolvimento e implementação dos sprites e animações da seção do boneco, além da administração do backend do projeto.Dedica-se à criação de recursos visuais dinâmicos e à integração de sistemas.', img: 'midia/integrantes/pramio1.jpg' },
    { nome: 'Bruno Gelain', text: 'Estudante de 16 anos do Instituto Federal Catarinense Campus Concórdia,  no curso de informática. Responsável por esta seção "Sobre Nós" e pelo footer.', img: 'midia/integrantes/bruno.png' },
    { nome: 'Gabriel Jappe', text: 'Discente do IFC Campus Concórdia - Informática para a Internet. Ingressado em 1ª colocação à Instituição. Corretor ortográfico e desenvolvedor do projeto. Responsável pela escrita e correção dos textos do website, e encarregado da integração do sistema prescritor de treinos com a Inteligência Artificial.', img: 'midia/integrantes/jappe.jpg' },
    { nome: 'Carlos Mior', text: 'Estudante de 17 anos do Instituto Federal Catarinenese Campuus Concórdia, no curso de informática para a internet. Responsável pelo header e hero.', img: 'midia/integrantes/carlos.png' },
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
