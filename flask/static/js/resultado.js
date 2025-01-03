fetch('/dados')  // Caminho do arquivo JSON
    .then(response => response.json())  // Converte a resposta para JSON
    .then(dados => {
        let texto = dados.treino
        cortaTexto(texto)
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

function cortaTexto(texto) {
    let list = texto.split("*")
    console.log(list);  
}