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
