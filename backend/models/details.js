const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Details = sequelize.define("userDetail", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: Sequelize.STRING,
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Details;
