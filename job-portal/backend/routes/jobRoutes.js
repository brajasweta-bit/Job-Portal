const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  getMyJobs,
  deleteJob,
  getJobById
} = require("../controllers/jobController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createJob);
router.get("/", getJobs);
router.get("/my", protect, getMyJobs);
router.get("/:id", getJobById);
router.delete("/:id", protect, deleteJob);

module.exports = router;