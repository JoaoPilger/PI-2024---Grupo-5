const passar = document.getElementsByClassName("passar");
const voltar = document.getElementsByClassName("voltar");
const slider = document.getElementById("slide");

// // // Passar a seção do questionário // // //
for (let i = 1; i < passar.length + 1; i++) {
    passar[i - 1].addEventListener("click", () =>{
        let move = -170;
        move = move * i
        slider.style.transform = `translateX(${move}%)`
        
    });
}

// // // Voltar a seção do questionário // // //
for (let i = 0; i < voltar.length; i++) {
    let move = 0;
    voltar[i].addEventListener("click", () =>{
        move = -170 * i
        slider.style.transform = `translateX(${move}%)`
        
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const atvSim = document.getElementById("atvSim");
    const atvNao = document.getElementById("atvNao");
    const pergsSim = document.querySelector(".pergsSim");

    // Esconde a div inicialmente
    pergsSim.style.display = "none";

    // Adiciona um event listener para quando o estado dos botões mudar
    [atvSim, atvNao].forEach(radio => {
        radio.addEventListener("change", () => {
            if (atvSim.checked) {
                pergsSim.style.display = "block"; // Mostra a div
                pergsSim.style.height = "auto"
            } else {
                pergsSim.style.display = "none"; // Esconde a div
            }
        });
    });
});