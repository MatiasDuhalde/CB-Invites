// Load environment variables
require('dotenv').config();

const config = {
  default: {
    user: process.env.DB_USERNAME || 'currencybird',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 5432,
  },
  development: {
    extend: 'default',
    database: process.env.DB_NAME || 'cb_invites_development',
  },
  test: {
    extend: 'default',
    database: 'cb_invites_test',
  },
  production: {
    extend: 'default',
    use_env_variable: 'DATABASE_URL',
  },
};

Object.keys(config).forEach(configKey => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = { ...config[configValue.extend], ...configValue };
  }
});

module.exports = config;
