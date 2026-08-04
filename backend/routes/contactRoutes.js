const express = require("express");

const router = express.Router();

const {
  sendContact,
  getAllContacts,
} = require("../controllers/contactController");

// POST Contact Form
router.post("/", sendContact);

// GET All Contacts
router.get("/", getAllContacts);

module.exports = router;