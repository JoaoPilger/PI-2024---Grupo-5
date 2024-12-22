const express = require('express');
const bodyParser = require('body-parser');
const { createObjectCsvWriter } = require('csv-writer');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'formulario')));

const csvPath = 'csv/data.csv';

if (!fs.existsSync(csvPath)) {
  const csvWriter = createObjectCsvWriter({
    path: csvPath,
    header: [
      { id: 'nome', title: 'Nome' },
      { id: 'idade', title: 'Idade' },
      { id: 'sexo', title: 'Sexo' },
      { id: 'peso', title: 'Peso' },
      { id: 'altura', title: 'Altura' },
      { id: 'exercita', title: 'Se Exercita' },
      { id: 'exercitaQuais', title: 'Que exercicios'},
      { id: 'exercicioSemanal', title: 'Exercicios por Semana' },
      { id: 'exercicioHoras', title: 'Tempo' },
      { id: 'sono', title: 'Tempo de Sono' },
      { id: 'doenca', title: 'Possui alguma doença' },
      { id: 'doencaQuais', title: 'Qual doença' },
      { id: 'deficiencia', title: 'Possui alguma deficiência' },
      { id: 'deficienciaQuais', title: 'Qual deficiencia?' },
      { id: 'cirurgia', title: 'Fez ou irá fazer cirurgia' },
      { id: 'cirurgiaQual', title: 'Qual cirurgia' },
      { id: 'medicamentos', title: 'Toma medicamentos' },
      { id: 'medicamentosFrequencia', title: 'Frequência que toma medicamentos' },
      { id: 'bebe', title: 'Bebe' },
      { id: 'bebeFrequencia', title: 'Frequência que bebe' },
      { id: 'fuma', title: 'Fuma' },
      { id: 'fumaFrequencia', title: 'Frequência que fuma' },
      { id: 'diasLivres', title: 'Frequência em dias por semana' },
      { id: 'tempoLivre', title: 'Tempo livre por dia para exercitar' },
      { id: 'periodo', title: 'Período livre do dia' },
      { id: 'intensidade', title: 'Intensidade dos exercícios' },
      { id: 'extra', title: 'Informações Extras' },
    ],
  });
  csvWriter.writeRecords([]);
}

const csvWriter = createObjectCsvWriter({
  path: csvPath,
  append: true,
  header: [
    { id: 'nome', title: 'Nome' },
    { id: 'idade', title: 'Idade' },
    { id: 'sexo', title: 'Sexo' },
    { id: 'peso', title: 'Peso' },
    { id: 'altura', title: 'Altura' },
    { id: 'exercita', title: 'Se Exercita' },
    { id: 'exercitaQuais', title: 'Que exercicios'},
    { id: 'exercicioSemanal', title: 'Exercicios por Semana' },
    { id: 'exercicioHoras', title: 'Tempo' },
    { id: 'sono', title: 'Tempo de Sono' },
    { id: 'doenca', title: 'Possui alguma doença' },
    { id: 'doencaQuais', title: 'Qual doença' },
    { id: 'deficiencia', title: 'Possui alguma deficiência' },
    { id: 'deficienciaQuais', title: 'Qual deficiencia?' },
    { id: 'cirurgia', title: 'Fez ou irá fazer cirurgia' },
    { id: 'cirurgiaQual', title: 'Qual cirurgia' },
    { id: 'medicamentos', title: 'Toma medicamentos' },
    { id: 'medicamentosFrequencia', title: 'Frequência que toma medicamentos' },
    { id: 'bebe', title: 'Bebe' },
    { id: 'bebeFrequencia', title: 'Frequência que bebe' },
    { id: 'fuma', title: 'Fuma' },
    { id: 'fumaFrequencia', title: 'Frequência que fuma' },
    { id: 'diasLivres', title: 'Frequência em dias por semana' },
    { id: 'tempoLivre', title: 'Tempo livre por dia para exercitar' },
    { id: 'periodo', title: 'Período livre do dia' },
    { id: 'intensidade', title: 'Intensidade dos exercícios' },
    { id: 'extra', title: 'Informações Extras' },
  ],
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'formulario', 'formulario.html'));
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
    exercitaQuais: data.atvQuais || '',
    exercicioSemanal: data.atvFrequencia || '',
    exercicioHoras: data.atvDur || '',
    sono: data.sono || '',
    doenca: data.doenca || '',
    doencaQuais: data.qualDoenca || '',
    deficiencia: data.defic || '',
    deficienciaQuais: data.qualDefic || '',
    cirurgia: data.cirur || '',
    cirurgiaQual: data.qualCirur || '',
    medicamentos: data.med || '',
    medicamentosFrequencia: data.medFre || '',
    bebe: data.bebida || '',
    bebeFrequencia: data.bebidaFre || '',
    fuma: data.fumo || '',
    fumaFrequencia: data.fumoFre || '',
    diasLivres: data.atvNovaFre || '',
    tempoLivre: data.atvNovaTempo || '',
    periodo: data.atvNovaPer || '',
    intensidade: data.atvNovaIntense || '',
    extra: data.infoExtra || '',
  };

  csvWriter
    .writeRecords([record])
    .then(() => {
      console.log('Salvo dado:', record);
      res.send('Dados salvos.');
    })
    .catch((err) => {
      console.error('Error saving data:', err);
      res.status(500).send('Erro ao salvar os dados no CSV.');
    });
});


app.listen(1421, () => {
  console.log('http://localhost:1421');
});
