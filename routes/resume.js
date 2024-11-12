// backend/routes/resume.js
const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Get resume data
router.get('/', async (req, res) => {
  const resume = await Resume.find();
  res.json(resume);
});

// Create resume data
router.post('/', async (req, res) => {
  const newResume = new Resume(req.body);
  await newResume.save();
  res.status(201).json(newResume);
});

module.exports = router;
