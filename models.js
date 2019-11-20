const Sequelize = require("sequelize");

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    login: true,
    operatorAliases: false,
    define: {
      underscored: true
    }
  });
} else {
  sequelize = new Sequelize({
    database: "chatApp",
    dialect: "postgres",
    operatorAliases: false,
    define: {
      underscored: true
    }
  });
}

const Message = sequelize.define("message", {
  userName: Sequelize.STRING,
  content: Sequelize.STRING
});

module.exports = { sequelize, Message };
