const content = [
    { nome:'João Pilger', text: 'Texto Pilger', img: '../../midia/integrantes/pilger.png' },
    { nome: 'João Prâmio', text: 'Texto Pramio', img: '../../midia/integrantes/pramio.png' },
    { nome: 'Bruno Gelain', text: 'Estudante de 16 anos do Instituto Federal Catarinense Campus Concórdia,  no curso de informática. Responsável por esta seção "Sobre Nós" e pelo footer.', img: '../../midia/integrantes/bruno.png' },
    { nome: 'Gabriel Jappe', text: 'Texto Jappe', img: '../../midia/integrantes/jappe.png' },
    { nome: 'Carlos Mior', text: 'Texto Carlos', img: '../../midia/integrantes/carlos.png' },
    { nome: 'Murilo Jochkeck', text: 'Texto Murilo', img: '../../midia/integrantes/murilo.png' }
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
