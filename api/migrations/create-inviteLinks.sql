DROP TABLE IF EXISTS inviteLinks CASCADE;

CREATE TABLE inviteLinks(
    id SERIAL PRIMARY KEY,
    userId INT REFERENCES users(id),
    code VARCHAR(255) NOT NULL UNIQUE,
    createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW()
)
