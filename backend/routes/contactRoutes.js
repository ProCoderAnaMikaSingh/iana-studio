const express = require("express");
const router = express.Router();

const { sendContact } = require("../controllers/contactController");

// Browser test
router.get("/", (req, res) => {
  res.send("Contact API Working ✅");
});

// Form submit
router.post("/", sendContact);

module.exports = router;