// backend/models/Resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  profileSummary: String,
  skills: [String],
  education: [
    {
      level: String,
      year: String,
      institution: String,
      percentage: String,
    },
  ],
  experience: [
    {
      role: String,
      description: String,
      year: String,
    },
  ],
  projects: [
    {
      title: String,
      description: String,
      techStack: [String],
    },
  ],
  certifications: [String],
  extraCurriculars: [String],
  softSkills: [String],
  languages: [String],
});

module.exports = mongoose.model('Resume', resumeSchema);
