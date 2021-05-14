const pool = require('../../config/pool');
const { generateInviteLinkCode } = require('./utils');

const getUserByEmail = async email => {
  return pool.query(
    'SELECT id,"fullName",email,sex,address,"createdAt" FROM users WHERE email=($1)',
    [email],
  );
};

const getInviteLinkByCode = async linkCode => {
  return pool.query(
    'SELECT "inviteLinks".id,"userId","fullName",code,"inviteLinks"."createdAt" FROM "inviteLinks" INNER JOIN users ON "userId"=users.id WHERE code=($1)',
    [linkCode],
  );
};

const getRanking = async () => {
  return pool.query(
    'SELECT users.id, users."fullName", users.email, CAST(COUNT(invites."invitedId") AS INT) AS "usersInvited", (CAST(COUNT(invites."invitedId") AS INT)*5000) AS amount FROM invites LEFT JOIN users ON users.id=invites."inviterId" GROUP BY users.id, users."fullName", users.email ORDER BY "usersInvited" DESC',
  );
};

const insertInviteLink = async user => {
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

const insertInvite = async invite => {
  return pool.query(
    'INSERT INTO "invites"("inviterId", "invitedId", "inviteLinkId") VALUES ($1,$2,$3) RETURNING "inviterId","invitedId","inviteLinkId"',
    [invite.inviterId, invite.invitedId, invite.inviteLinkId],
  );
};

module.exports = {
  getUserByEmail,
  getInviteLinkByCode,
  getRanking,
  insertUser,
  insertInviteLink,
  insertInvite,
};
