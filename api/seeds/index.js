const fs = require('fs');
const path = require('path');

const basename = path.basename(module.filename);

console.log('Running seeds...');

Promise.all(
  fs
    .readdirSync(__dirname)
    .filter(
      file =>
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js',
    )
    .map(file => {
      const filePath = path.join(__dirname, file);
      console.log(`Running seed: ${filePath}`);
      return require(filePath)();
    }),
).then(() => {
  console.log('All seeds done');
});
