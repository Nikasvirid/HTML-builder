//console.log ('привет,Креветка!');
//const { stdin, stdout } = process;
//stdin.on('data', data => stdout.write(data));
//const fs = require('fs');
//let writeableStream = fs.createWriteStream('./02-write-file/hello.txt','utf-8');
//writeableStream.write('');
const fs =  require('fs');
const { stdin, stdout } = process;
stdout.write('Привет,креветка!\n');
stdin.on('data', data => {
  stdout.write('Ну напиши хоть что-то!\n');
  stdin.on('data',data =>{
    console.log(data);
 
    let writeableStream = fs.createWriteStream('./02-write-file/hello.txt','utf-8'); 
    writeableStream.write('privet');
    process.stdin.pipe(writeableStream);
    
  });
  process.exit();
   
  
  
   

});    
process.on('exit', () => stdout.write('Удачи!'));


