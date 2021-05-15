const fs = require('fs');
const path = require('path');

const basename = path.basename(module.filename);

console.log('Running seeds...');

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach(file => {
    const filePath = path.join(__dirname, file);
    console.log(`Running seed: ${filePath}`);
    await require(filePath)();
  });

console.log('All seeds done');
