const auth = require("basic-auth");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const authenticate = async (req, res, next) => {
  const credentials = auth(req);

  if (credentials) {
    const user = await User.findOne({ where: { username: credentials.name } });
    if (user && bcrypt.compareSync(credentials.pass, user.password)) {
      next();
    } else {
      res.status(401).json({ message: "Access Denied" });
    }
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
};

module.exports = authenticate;
