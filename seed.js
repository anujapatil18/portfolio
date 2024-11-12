// seed.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Resume = require('./models/Resume');

dotenv.config();

(async () => {
  try {
    // Check for the existence of MONGO_URI
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not defined in .env file");
    }

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const resumeData = {
      name: "Anuja Ananda Patil",
      email: "anujapatil1805@gmail.com",
      phone: "9970413366",
      linkedin: "https://www.linkedin.com/in/anuja-patil-328117285",
      profileSummary: "Fresher in IT Technical Support, pursuing Computer Science Engineering.",
      education: [
        {
          level: "SSC",
          institution: "Shivraj Vidyalaya Jr. College & Highschool",
          year: "2019",
          percentage: "84.60%"
        },
        {
          level: "HSC",
          institution: "Vyankatrao Jr. College",
          year: "2021",
          percentage: "91.33%"
        }
      ],
      experience: [
        {
          role: "Executive in CSI Logistic Committee",
          year: "2022"
        },
        {
          role: "Cultural Vice President of ACSES",
          year: "2023-24"
        }
      ],
      projects: [
        {
          title: "Namaste Chef",
          description: "Static website showcasing a collection of recipes from various states.",
          techStack: ["HTML", "CSS", "JavaScript"]
        },
        {
          title: "News4ever",
          description: "A live news website fetching real-time news using News API.",
          techStack: ["HTML", "CSS", "JavaScript", "News API"]
        }
      ],
      skills: ["Python", "Frontend", "HTML", "CSS", "JavaScript", "React JS", "SQL", "Power BI"],
      certifications: [
        "Internship - SQL and Python at ITnium Technologies Sangli",
        "Data visualization and Power BI course by Great Learning",
        "Python workshop at Sanjay Ghodawat University"
      ],
      extraCurriculars: [
        "Participation in Technophilia events 2022-23, 2023-24",
        "Volunteer in national-level event 'Vibrant' at Sanjay Ghodawat University",
        "Participation in group dance in 'Umang' 2021-22"
      ],
      languages: ["English", "Hindi", "Marathi"]
    };

    console.log("Starting database seeding...");

    // Clear existing documents
    const deletedCount = await Resume.deleteMany({});
    console.log(`Deleted ${deletedCount.deletedCount} existing records`);

    // Insert new resume data
    const createdResume = await Resume.create(resumeData);
    console.log("Database seeded successfully with:", createdResume);

  } catch (error) {
    console.error("Error in seeding the database:", error);
  } finally {
    mongoose.connection.close();
    console.log("Database connection closed");
  }
})();
