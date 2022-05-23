const {stdin, stdout} = process;
const fs = require('fs');
const path = require('path');
const streamWrite = fs.createWriteStream(path.join(__dirname, 'hello.txt'));
stdout.write('Привет,креветка!\n');
stdin.on('data', data => {
  if(data.toString().trim() === 'exit'){
    process.exit();
  }else {
    streamWrite.write(data);
  }
    
});

process.on('exit', () => stdout.write('ПРОВЕРЬ СВОЙ SCORE!Пока! \n'));
process.on('SIGINT', ()=>{
  process.exit();
});

