const express = require("express");
const TeamMember = require("../models/TeamMember");

const router = express.Router();

// CREATE team member
router.post("/", async (req, res) => {
  try {
    const member = await TeamMember.create(req.body);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all members
router.get("/", async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE member
router.delete("/:id", async (req, res) => {
  try {
    await TeamMember.findByIdAndDelete(req.params.id);
    res.json({ message: "Team member deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
