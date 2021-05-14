DROP TABLE IF EXISTS invites CASCADE;

CREATE TABLE invites(
    "inviterId" INT REFERENCES users(id),
    "invitedId" INT REFERENCES users(id),
    "inviteId" INT REFERENCES users(id),
    PRIMARY KEY("inviterId", "invitedId")
)
