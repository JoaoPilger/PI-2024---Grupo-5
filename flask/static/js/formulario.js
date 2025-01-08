const passar = document.getElementsByClassName("passar");
const voltar = document.getElementsByClassName("voltar");
const slider = document.getElementById("slide");
const submitButton = document.getElementById("btnSubmit");

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

document.querySelectorAll('input[type="radio"][value="sim"], input[type="radio"][value="nao"], input[type="radio"][value="fazer"]').forEach(radio => {
    let cirurFazer = document.querySelector('input[type="radio"][value="fazer"]')
    let divFazer = document.getElementsByClassName(`${cirurFazer.name}`)[0]

    radio.addEventListener("change", () => {

        let radioName = radio.name;
        let divAbrir = document.getElementsByClassName(`${radioName}`)[0];

        if (radio.checked && radio.value === "sim") {

            divAbrir.style.display = "flex";


        } else if(radio.checked && radio.value === "fazer"){

            divAbrir.style.display = "flex";

        }else {
            cirurFazer.checked = false
            divFazer.style.display = "none"

            divAbrir.style.display = "none";
        }
    });
});



// // // Lógica para o botão Enviar // // //
submitButton.addEventListener("click", function() {
    // Coleta os dados do formulário (presumindo que os dados estão em inputs de tipo text, number, etc.)
    const formData = new FormData(document.querySelector("form"));
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    // envia os dados pro flask
    fetch('http://127.0.0.1:5000/save_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Envia os dados como JSON
    })
    .then(response => response.json())
});
