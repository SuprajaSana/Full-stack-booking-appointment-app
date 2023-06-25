const Sequelize = require("sequelize");

const sequelize = new Sequelize("booking_appointment_app", "root", "Saana@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
