//const fs = require('fs');
//const path = require('path');
//const {stat} = require('fs');
//fs.readdir('./03-files-in-folder/secret-folder',(err,files) => {
// if(err) throw err;
//console.log ('Перечень файлов:'+ files);
//fs.stat('./03-files-in-folder/secret-folder/',(err, stats) =>{
//if(err){
//console.error(err);
//return;
//}
//console.log(stats);
//});
//});


const { readdir } = require('fs/promises');
const fs = require('fs');
const path = require('path');

async function getFiles() {
  try {
    const files = await readdir(path.join('./03-files-in-folder/ secret-folder'), 'utf8', true);
    for (const file of files) {
      const extname = path.parse(file);
      fs.stat(path.join('./03-files-in-folder/secret-folder', file), (err, stats) => {
        if (err) throw err;
        if (stats.isFile())
          console.log(extname.name + ' - ' + extname.ext.substring(1, extname.ext.lenght) + ' - ' + stats.size);
      });
    }
  } catch (err) {
    console.log(err);
  }
}

getFiles();
