const express = require("express");
const Guest = require("../models/Guest");

const router = express.Router();

// CREATE guest
router.post("/", async (req, res) => {
  try {
    const guest = await Guest.create(req.body);
    res.json(guest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all guests
router.get("/", async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE guest
router.delete("/:id", async (req, res) => {
  try {
    await Guest.findByIdAndDelete(req.params.id);
    res.json({ message: "Guest deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
