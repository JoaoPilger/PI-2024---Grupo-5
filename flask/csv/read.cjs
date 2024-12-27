const fs = require('fs');
const csv = require('csv-parser');

const csvPath = 'csv/data.csv';
if (!fs.existsSync(csvPath)) {
  console.log('O arquivo não existe');
  process.exit(1);
}

console.log('Lendo data de data.csv\n');

const results = [];

fs.createReadStream(csvPath)
  .pipe(csv())
  .on('data', (row) => {
    results.push(row);
  })
  .on('end', () => {
    console.log('Dados do CSV:\n');
    results.forEach((row, index) => {
      console.log(`Record ${index + 1}:`);
      for (const [key, value] of Object.entries(row)) {
        console.log(`  ${key}: ${value}`);
      }
      console.log(); //pula linha
    });
  })
  .on('error', (err) => {
    console.error('Erro ao ler o arquivo:', err.message);
  });
