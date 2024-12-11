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
