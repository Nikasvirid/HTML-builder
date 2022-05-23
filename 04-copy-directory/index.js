//const fs = require('fs');

//fs.mkdir('./04-copy-directory/copy-files', { recursive: true }, err => {
//if(err) throw err; 
//console.log('Все папки успешно созданы');
//});

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'files');
const destDir = path.join(__dirname, 'files-copy');

fs.access(destDir, (err) => {
  if (err) {
    copyAllFiles(srcDir, destDir);
  }
  else fs.rmdir(destDir, { force: true, recursive: true }, function(err) {
    if (err) throw err;
    copyAllFiles(srcDir, destDir);
  });
});

function copyFile(src, dest, file) {
  fs.copyFile(path.join(src, file.name), path.join(dest, file.name), err => {
    if (err) throw err;
  });
  console.log(`${file.name} файл успешно скопирован`);
}

function copyAllFiles (src, dest) {
  fs.mkdir(dest, (err) => {
    if (err) throw err;
  });
  fs.readdir(src, {withFileTypes: true}, (err, files) => {
    files.forEach(file => {
      if(file.isFile()) {
        copyFile(src, dest, file);
      } else {
        copyAllFiles(path.join(src, file.name), path.join(dest, file.name));
      }
    });
  });
}