const pool = require('../../config/pool');
const { generateInviteLinkCode } = require('./utils');

const getUserByEmail = async email => {
  return pool.query(
    'SELECT id,"fullName",email,sex,address,"createdAt" FROM users WHERE email=($1)',
    [email],
  );
};

const createInvite = async user => {
  const linkCode = generateInviteLinkCode(user);
  return pool.query(
    'INSERT INTO "inviteLink"("userId", code) VALUES ($1,$2) RETURNING id,"userId",code,"createdAt"',
    [user.id, linkCode],
  );
};

const insertUser = async user => {
  return pool.query(
    'INSERT INTO users("fullName", email, sex, address) VALUES ($1,$2,$3,$4) RETURNING id,"fullName",email,sex,address,"createdAt"',
    [user.fullName, user.email, user.sex, user.address],
  );
};

const getRanking = async () => {
  return pool.query('SELECT * FROM users');
};

module.exports = {
  getUserByEmail,
  insertUser,
  createInvite,
};
