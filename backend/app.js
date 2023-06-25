const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");

var cors = require('cors');

const app = express();

app.use(cors());

const detailsRoutes=require("./routes/details")

app.use(bodyParser.json({ extended: false }));

app.use(detailsRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));