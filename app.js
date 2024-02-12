const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const countryRoutes = require("./routes/countryRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api/country", countryRoutes);

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
});
