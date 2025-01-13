// REQUISIÇÃO //

// Definindo uma variável `response` global, removendo o redeclaração dentro da função
let response;

async function requestJson() {
    const intervalo = setInterval(async () => {
        try {
            response = await fetch('/dados');  // Corrigido: URL agora está com uma barra inicial '/'
            if (!response.ok) throw new Error('Erro na requisição');

            const dados = await response.json();

            if (dados.status == 'disponivel') {
                clearInterval(intervalo);  // Interrompe o loop

                let text = dados.treino;
                sliceText(text);
            };

        } catch (erro) {
            console.log("Erro na requisição", erro);
        };
    }, 2000);  // Intervalo de 2 segundos entre as requisições
};

// FORMATAÇÃO DOS TEXTOS //

function sliceText(text) {
    while (text.includes("*")) {
        text = text.replace("*", ""); // Substitui o primeiro "*" encontrado
    }
    let list = text.split("\n");

    // Remover elementos vazios usando filter
    list = list.filter(item => item !== "");

    setText(list);
};

const body = document.getElementsByTagName("body");

// CRIAÇÃO DAS DIV COM A ROTINA //

function createDays() {
    let divDays = document.getElementById('divDays');

    for (let index = 1; index < 15; index += 2) {
        let divDaysTogether = document.createElement("div");
        divDaysTogether.classList.add('daysTogether', 'flex');  // Adicionando as classes corretamente
        divDaysTogether.id = 'daysTogether' + index;

        divDays.appendChild(divDaysTogether);
    }

    for (let index = 0; index < 15; index++) {
        let divDaysTogether = (index % 2 != 0) ? document.getElementById('daysTogether' + index) : document.getElementById('daysTogether' + (index - 1));

        if (index == 0) {
            let intro = document.getElementById("divIntro");
            let p = document.createElement("p");

            p.id = "introText";

            intro.appendChild(p);

        } else if (index % 2 != 0) {
            let div = document.createElement("div");

            div.id = "diaSemana" + index;
            div.classList.add("diaSemana");
            divDaysTogether.appendChild(div);

        } else {
            let div = document.createElement("div");

            div.id = "diaDescr" + index;
            div.classList.add("diaDescr");
            divDaysTogether.appendChild(div);

            let p = document.createElement("p");

            div.appendChild(p);
        };
    };
};

// INSERÇÃO DOS TEXTOS FORMATADOS EM SEUS RESPECTIVOS LUGARES / CRIAÇÃO DO TEXTO DE INTRODUÇÃO COM ANIMAÇÃO//

function setText(list) {
    list.forEach((text, index) => {
        if (index == 0) {
            let intro = document.getElementById("introText");

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            function seeText(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let speed = 40;

                        taping(text, speed, intro);
                        observer.unobserve(entry.target);
                    }
                });
            }

            const observer = new IntersectionObserver(seeText, observerOptions);
            observer.observe(intro);

        } else if (index % 2 == 0) {
            let diaDescr = document.getElementById('diaDescr' + index);
            let description = diaDescr.getElementsByTagName('p');

            description[0].innerText = text;
        } else {
            let diaSemana = document.getElementById('diaSemana' + index);

            diaSemana.innerText = text;
        };

        showAll();
    });
};

// FUNÇÃO PARA ABRIR E FECHAR DIAS DA SEMANA //

document.body.addEventListener("click", (event) => {
    let diaSemana = document.getElementsByClassName("diaSemana");
    let diaDescr = document.getElementsByClassName("diaDescr");

    // Itera sobre os elementos de 'diaSemana'
    for (let i = 0; i < diaSemana.length; i++) {
        // Verifica se o clique foi em 'diaSemana' ou em 'diaDescr' correspondente
        if (event.target === diaSemana[i] || event.target === diaDescr[i].firstChild) {
            let father = diaSemana[i].parentElement;
            console.log(father);
            openCloseDiv(father);
        }
    }
});

function openCloseDiv(div) {
    let computedStyle = window.getComputedStyle(div);
    let maxHeight = computedStyle.maxHeight;

    if (maxHeight == "71px") {
        div.style.maxHeight = "1000px";
    } else {
        div.style.maxHeight = "71px";
    }
}

// MOSTRA O RESTO DA PÁGINA //

function showAll() {
    let main = document.getElementById("main");
    let loading = document.getElementById("loading");

    loading.style.display = "none";
    main.style.display = "block";
}

// FUNÇÃO PARA "DIGITAR SOZINHO" //

function taping(text, speed, paragraph) {
    let i = 0;

    function type() {
        if (i < text.length) {
            paragraph.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// FUNÇÕES A SEREM EXECUTADAS QUANDO A PÁGINA INICIAR //

window.addEventListener("load", () => {
    requestJson();
    createDays();
});


document.getElementById('print').addEventListener('click', function () {
    const diasTreino = document.querySelectorAll('.daysTogether');

    // Abre todas as divs ajustando o max-height
    diasTreino.forEach(div => {
        div.style.maxHeight = "1000px";
    });

    // Deixa um cooldown pra imprimir certo
    setTimeout(() => {
        window.print();
    }, 500);

});