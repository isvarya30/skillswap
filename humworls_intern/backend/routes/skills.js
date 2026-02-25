const express = require("express");
const Skill = require("../models/Skill");
const router = express.Router();

// GET all skills
router.get("/", async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch skills" });
  }
});

// POST new skill
router.post("/", async (req, res) => {
  try {
    const newSkill = new Skill(req.body);
    const savedSkill = await newSkill.save();
    res.json(savedSkill);
  } catch (err) {
    res.status(500).json({ message: "Failed to create skill" });
  }
});

// PUT update skill
router.put("/:id", async (req, res) => {
  try {
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ message: "Failed to update skill" });
  }
});

// DELETE skill
router.delete("/:id", async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "Skill deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete skill" });
  }
});

module.exports = router;
