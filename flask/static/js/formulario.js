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

document.addEventListener("DOMContentLoaded", () => {
    const atvSim = document.getElementById("atvSim");
    const atvNao = document.getElementById("atvNao");
    const pergsSim = document.querySelector(".pergsSim");

    pergsSim.style.display = "none";

    [atvSim, atvNao].forEach(radio => {
        radio.addEventListener("change", () => {
            if (atvSim.checked) {
                pergsSim.style.display = "block"; 
                pergsSim.style.height = "auto"
            } else {
                pergsSim.style.display = "none"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const simDoenca = document.getElementById("simDoenca");
    const naoDoenca = document.getElementById("naoDoenca");
    const pergSimDoe = document.querySelector(".pergSimDoe");

    [simDoenca, naoDoenca].forEach(radio => {
        radio.addEventListener("change", () => {
            if (simDoenca.checked) {
                pergSimDoe.style.display = "block"; 
                pergSimDoe.style.height = "auto"
            } else {
                pergSimDoe.style.display = "none"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const simDefic = document.getElementById("simDefic");
    const naoDefic = document.getElementById("naoDefic");
    const pergSimDefi = document.querySelector(".pergSimDefi");

    [simDefic, naoDefic].forEach(radio => {
        radio.addEventListener("change", () => {
            if (simDefic.checked) {
                pergSimDefi.style.display = "block"; 
                pergSimDefi.style.height = "auto"
            } else {
                pergSimDefi.style.display = "none"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cirurSim = document.getElementById("cirurSim");
    const cirurNao = document.getElementById("cirurNao");
    const pergSimCirur = document.querySelector(".pergSimCirur");

    [cirurSim, cirurNao].forEach(radio => {
        radio.addEventListener("change", () => {
            if (cirurSim.checked) {
                pergSimCirur.style.display = "block"; 
                pergSimCirur.style.height = "auto"
            } else {
                pergSimCirur.style.display = "none"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const medSim = document.getElementById("medSim");
    const medNao = document.getElementById("medNao");
    const pergSimMed = document.querySelector(".pergSimMed");

    [medSim, medNao].forEach(radio => {
        radio.addEventListener("change", () => {
            if (medSim.checked) {
                pergSimMed.style.display = "block"; 
                pergSimMed.style.height = "auto"
            } else {
                pergSimMed.style.display = "none"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const bebidaSim = document.getElementById("bebidaSim");
    const bebidaNao = document.getElementById("bebidaNao");
    const pergSimBebe = document.querySelector(".pergSimBebe");

    [bebidaSim, bebidaNao].forEach(radio => {
        radio.addEventListener("change", () => {
            if (bebidaSim.checked) {
                pergSimBebe.style.display = "block"; 
                pergSimBebe.style.height = "auto"
            } else {
                pergSimBebe.style.display = "none"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const fumoSim = document.getElementById("fumoSim");
    const fumoNao = document.getElementById("fumoNao");
    const pergSimFuma = document.querySelector(".pergSimFuma");

    [fumoSim, fumoNao].forEach(radio => {
        radio.addEventListener("change", () => {
            if (fumoSim.checked) {
                pergSimFuma.style.display = "block"; 
                pergSimFuma.style.height = "auto"
            } else {
                pergSimFuma.style.display = "none"; 
            }
        });
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
    fetch('http://localhost:5000/save_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),  // Envia os dados como JSON
    })
    .then(response => response.json())
});
