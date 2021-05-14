const pool = require('../../config/pool');

const getUserByEmail = async email => {
  return pool.query(
    'SELECT id,fullName,email,sex,address,createdAt FROM users WHERE email=($1)',
    [email],
  );
};

const insertUser = async user => {
  return pool.query(
    'INSERT INTO users(fullName, email, sex, address) VALUES ($1,$2,$3,$4)',
    [user.fullName, user.email, user.sex, user.address],
  );
};

module.exports = {
  getUserByEmail,
  insertUser,
};
