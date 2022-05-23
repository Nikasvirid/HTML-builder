const fs = require('fs');
const path = require('path');
const {stat} = require('fs');
fs.readdir('./03-files-in-folder/secret-folder',(err,files) => {
  if(err) throw err;
  console.log ('Перечень файлов:'+ files);
  fs.stat('./03-files-in-folder/secret-folder/',(err, stats) =>{
    if(err){
      console.error(err);
      return;
    }
    console.log(stats);
    
  });
});
try{
  const files = fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true});
  files.then(arrayOfFiles=>{
    arrayOfFiles.forEach(async dirent=>{
      if(dirent.isFile()){
        const {name, ext} = path.parse(`${dirent.name}`);
        stat(path.join(__dirname,'secret-folder',`${dirent.name}`), (err, stats) => {
          console.log(`${name} - ${ext} - ${stats.size}`);
        });               
      }
    });
  });
}catch(err){
  console.error(err);
}










   

