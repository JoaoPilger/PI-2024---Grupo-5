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