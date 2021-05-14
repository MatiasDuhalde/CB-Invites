const pool = require('../config/pool');

const exampleUsers = [
  {
    fullName: 'John Doe',
    email: 'johndoe@gmail.com',
    sex: 1,
    address: 'Santiago',
  },
  {
    fullName: 'Juan Pérez',
    email: 'juanperez@yahoo.es',
    sex: 1,
    address: 'Valparaíso',
  },
  {
    fullName: 'Jane Doe',
    email: 'janedoe@yahoo.es',
    sex: 2,
    address: 'Puerto Varas',
  },
];

const insertUsers = async users => {
  try {
    const promises = users.map(user =>
      pool.query(
        'INSERT INTO users("fullName", email, sex, address) VALUES ($1,$2,$3,$4)',
        [user.fullName, user.email, user.sex, user.address],
      ),
    );
    await Promise.all(promises);
    return true;
  } catch (databaseError) {
    console.log(databaseError);
  }
  return false;
};

insertUsers(exampleUsers);
