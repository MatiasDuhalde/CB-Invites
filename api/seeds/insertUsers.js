const { generateRandomUsers } = require('./utils/utils');
const { insertUsers } = require('./utils/queries');

const exampleUsers = generateRandomUsers(100);

insertUsers(exampleUsers);
