const fs = require('fs');
const promises = fs.promises;
const path = require('path');

const srcPath = join(__dirname, 'styles\\');
const destPath = join(__dirname, 'project-dist');

const writeStream = createWriteStream(join(destPath, 'bundle.css'));

let stylesArr = [];

function bundleCSS(styles) {

  writeStream.write(styles, 'utf-8');
  writeStream.end();
}

async function getStyles(src) {
  const srcFiles = await promises.readdir(src);

  for (const file of srcFiles) {
    if (parse(src + file).ext == '.css') {
            
      const stylesFileRead = await promises.readFile(src + file, 'utf-8');

      stylesArr.push(stylesFileRead);
    }
  }

  bundleCSS(stylesArr.join(''));
}

getStyles(srcPath);