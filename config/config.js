require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "fallback_username",
    password: process.env.DB_PASSWORD || "fallback_password",
    database: process.env.DB_DATABASE || "country_capital_db_development",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 3306,
  },
  test: {
    username: process.env.DB_USERNAME || "fallback_username",
    password: process.env.DB_PASSWORD || "fallback_password",
    database: process.env.DB_DATABASE || "country_capital_db_test",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 3306,
  },
  production: {
    username: process.env.DB_USERNAME || "fallback_username",
    password: process.env.DB_PASSWORD || "fallback_password",
    database: process.env.DB_DATABASE || "country_capital_db_production",
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.DB_PORT || 3306,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
