const pool = require('../../config/pool');

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

const getUsers = async () => {
  try {
    const queryResult = await pool.query('SELECT * FROM users');
    return queryResult.rows;
  } catch (databaseError) {
    console.log(databaseError);
  }
  return [];
};

const getInviteLinks = async () => {
  try {
    const queryResult = await pool.query('SELECT * FROM "inviteLinks"');
    return queryResult.rows;
  } catch (databaseError) {
    console.log(databaseError);
  }
  return [];
};

const insertInviteLinks = async inviteLinks => {
  try {
    const promises = inviteLinks.map(inviteLink =>
      pool.query('INSERT INTO "inviteLinks"("userId", code) VALUES ($1,$2)', [
        inviteLink.userId,
        inviteLink.code,
      ]),
    );
    await Promise.all(promises);
    return true;
  } catch (databaseError) {
    console.log(databaseError);
  }
  return false;
};

const insertInvites = async invites => {
  try {
    const promises = invites.map(invite =>
      pool.query(
        'INSERT INTO "invites"("inviterId", "invitedId", "inviteLinkId") VALUES ($1,$2,$3)',
        [invite.inviterId, invite.invitedId, invite.inviteLinkId],
      ),
    );
    await Promise.all(promises);
    return true;
  } catch (databaseError) {
    console.log(databaseError);
  }
  return false;
};

module.exports = {
  insertUsers,
  getUsers,
  getInviteLinks,
  insertInviteLinks,
  insertInvites,
};
