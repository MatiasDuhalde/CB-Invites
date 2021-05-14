const express = require('express');
const {
  getUserByEmail,
  getInviteLinkByCode,
  getRanking,
  insertUser,
  insertInvite,
  insertInviteLink,
} = require('./utils/queries');
const { validateUser, validateEmail } = require('./utils/utils');

const router = express.Router();

router.get('/ranking', async (req, res) => {
  try {
    ranking = getRanking().rows;
    res.json({ ranking });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});

router.post('/user', async (req, res) => {
  try {
    const { fullName, email, sex, address, inviteCode } = req.body;
    const userData = { fullName, email, sex: parseInt(sex), address };
    if (!validateUser(userData)) {
      throw new Error('Invalid user data');
    }
    const user = (await insertUser(userData)).rows[0];
    const out = { user };
    // If an invite code was supplied, we retrieve the corresponding invite
    if (user && inviteCode) {
      const inviteLink = (await getInviteLinkByCode(inviteCode)).rows[0];
      // If invite link actually exists "accept" invite
      if (inviteLink) {
        const inviteData = {
          inviterId: inviteLink.userId,
          invitedId: user.id,
          inviteLinkId: inviteLink.id,
        };
        const invite = (await insertInvite(inviteData)).rows[0];
        out.invite = invite;
      }
    }
    res.json(out);
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});

router.post('/invite', async (req, res) => {
  try {
    const { email, fullName } = req.body;
    if (!validateEmail(email)) {
      throw new Error('Invalid email data');
    }
    const queryData = await getUserByEmail(email);
    const user = queryData.rows[0];
    if (user && user.fullName === fullName) {
      const result = await insertInviteLink(user);
      const resultingInvite = result.rows[0];
      res.json(resultingInvite);
    }
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
});
// curl -H "Content-Type: application/json" -X POST -d '{"fullName": "Test User", "email": "testuser@gmail.com", "sex":1, "address": "Test Address"}' localhost:3000/user
//
module.exports = router;
