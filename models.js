const Sequelize = require("Sequelize");

const sequelize = new Sequelize({
  database: "chatApp",
  dialect: "postgres",
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Message = sequelize.define("message", {
  userName: Sequelize.STRING,
  content: Sequelize.STRING
});

module.exports = { sequelize, Message };
