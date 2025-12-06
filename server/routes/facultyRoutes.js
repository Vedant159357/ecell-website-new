const express = require("express");
const Faculty = require("../models/Faculty");

const router = express.Router();

// CREATE faculty
router.post("/", async (req, res) => {
  try {
    const faculty = await Faculty.create(req.body);
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all faculty
router.get("/", async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE faculty
router.delete("/:id", async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ message: "Faculty deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
