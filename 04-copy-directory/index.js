const fs = require('fs');

fs.mkdir('./04-copy-directory/copy-files', { recursive: true }, err => {
  if(err) throw err; 
  console.log('Все папки успешно созданы');
});