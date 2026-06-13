const express = require("express");
const router = express.Router();

const {
  applyJob,
  myApplications,
  getEmployerApplications,
  getJobApplicants,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

// candidate
router.post("/", protect, applyJob);
router.get("/my", protect, myApplications);

// employer
router.get("/employer", protect, getEmployerApplications);

// applicants for one job
router.get("/job/:jobId", protect, getJobApplicants);

module.exports = router;