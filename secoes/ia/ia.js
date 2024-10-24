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

            // atualiza a altura da div insight_ia usando requestAnimationFrame
            requestAnimationFrame(() => updateHeight(newHeight));
        }
    }, 0)); // limitador de FPS

    document.addEventListener('mouseup', () => {
        arrastando = false;
        puxador.style.cursor = 'grab'; // restaura o cursor ao soltar
        insightIA.style.transition = 'height 0.3s ease'; // transição para qualquer ajuste final na altura
    });
});
