const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'static')));

const jsonPath = (path.join(__dirname, '..', 'data', 'data.json'));

if (!fs.existsSync(jsonPath)) {
  fs.writeFileSync(jsonPath, JSON.stringify([]));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'templates', 'formulario', 'formulario.html'));
});

app.post('/submit', (req, res) => {
  const data = req.body;

  const record = {
    nome: data.nome || '',
    idade: data.idade || '',
    sexo: data.sexo || '',
    peso: data.peso || '',
    altura: data.altura || '',
    exercita: data.atvReg || '',
    quaisExercicios: data.atvQuais || '',
    exercicioSemanal: data.atvFrequencia || '',
    exercicioHoras: data.atvDur || '',
    tempoDeSono: data.sono || '',
    possuiDoenca: data.doenca || '',
    doencaQuais: data.qualDoenca || '',
    possuiDeficiencia: data.defic || '',
    deficienciaQuais: data.qualDefic || '',
    fezCirurgia: data.cirur || '',
    cirurgiaQual: data.qualCirur || '',
    usaMedicamentos: data.med || '',
    medicamentosFrequencia: data.medFre || '',
    ingereBebidas: data.bebida || '',
    bebidasFrequencia: data.bebidaFre || '',
    fuma: data.fumo || '',
    fumaFrequencia: data.fumoFre || '',
    diasLivres: data.atvNovaFre || '',
    tempoLivre: data.atvNovaTempo || '',
    periodoLivre: data.atvNovaPer || '',
    intensidade: data.atvNovaIntense || '',
    informacoesExtras: data.infoExtra || '',
  };

const existingData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

existingData.push(record);

fs.writeFileSync(jsonPath, JSON.stringify(existingData, null, 2));

console.log('Salvo dados:', record);
res.send('Dados salvos no JSON.');
});

app.listen(1421, () => {
  console.log('http://localhost:1421');
});
