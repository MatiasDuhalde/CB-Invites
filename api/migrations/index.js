const pool = require('../config/pool');
const fs = require('fs');
const path = require('path');

(async () => {
  const basename = path.basename(module.filename);
  console.log('Running migrations...');
  const files = fs
    .readdirSync(__dirname)
    .filter(
      file =>
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-4) === '.sql',
    );
  for (file of files) {
    const filePath = path.join(__dirname, file);
    console.log(`Running migration: ${filePath}`);
    const sqlQuery = fs.readFileSync(filePath).toString();
    await pool.query(sqlQuery);
  }
  console.log('All migrations done');
})();
