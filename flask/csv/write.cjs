const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

const csvWriter = createObjectCsvWriter({
  path: 'data.csv',
  header: [
    { id: 'nome', title: 'Nome' },
    { id: 'idade', title: 'Idade' },
    { id: 'sexo', title: 'Sexo' },
    { id: 'peso', title: 'Peso' },
    { id: 'altura', title: 'Altura' },
    { id: 'exercita', title: 'Se Exercita?' },
    { id: 'exercicioSemanal', title: 'Exercicios por Semana' },
    { id: 'exercicioHoras', title: 'Tempo'},
    { id: 'sono', title: 'Tempo de Sono' },
    { id: 'doenca', title: 'Doença' },
    { id: 'deficiencia', title: 'Deficiência' },
    { id: 'cirurgia', title: 'Fez ou irá fazer cirurgia' },
    { id: 'medicamentos', title: 'Toma medicamentos?' },
    { id: 'medicamentosFrequencia', title: 'Frequencia que toma Medicamentos' },
    { id: 'bebe', title: 'Bebe?' },
    { id: 'bebeFrequencia', title: 'Frequencia que bebe' },
    { id: 'fuma', title: 'Fuma?' },
    { id: 'fumaFrequencia', title: 'Frequencia que fuma' },
    { id: 'diasLivres', title: 'Frequencia em dias por semana' },
    { id: 'tempoLivre', title: 'Tempo livre por dia para exercitar' },
    { id: 'periodo', title: 'Periodo livre do dia' },
    { id: 'intensidade', title: 'Intensidade dos exercicios' },
  ],
});

const records = [
  {nome: 'Garfo',
    idade: '16',
    sexo: 'masculino',
    peso: '64',
    altura: '173',
    exercita: 'sim',
    exercicioSemanal: '3',
    exercicioHoras: '2',
    sono: '8',
    doenca: 'nao',
    deficiencia: 'nao',
    cirurgia: 'nao',
    medicamentos: 'nao',
    bebe: 'nao',
    bebeFrequencia: '',
    fuma: 'nao',
    fumaFrequencia: '',
    diasLivres: '2',
    tempoLivre: '2',
    periodo: 'Noite',
    intensidade: 'Intermediaria'},
];

csvWriter
  .writeRecords(records)
  .then(() => console.log('Arquivo CSV criado com sucesso!'))
  .catch((error) => console.error('Erro ao criar o arquivo:', error));
