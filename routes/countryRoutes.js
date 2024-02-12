const express = require("express");
const router = express.Router();
const { Country } = require("../models");

// Middleware for basic authentication
const authenticate = require("../middleware/basicAuth");

// Save country-capital information
router.post("/save", authenticate, async (req, res) => {
  try {
    const { name, capital } = req.body;
    const country = await Country.create({ name, capital });
    res.status(201).json(country);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).json({ message: "Country name already exists." });
    }
    res.status(400).json({ error: error.message });
  }
});

// Retrieve capital by country name
router.get("/:countryName", authenticate, async (req, res) => {
  try {
    const { countryName } = req.params;
    const country = await Country.findOne({ where: { name: countryName } });
    if (country) {
      res.json({ capital: country.capital });
    } else {
      res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
