const Application = require("../models/Application");
const Job = require("../models/Job");

// APPLY FOR JOB
const applyJob = async (req, res) => {
  try {
    const { jobId } = req.body;

    const application = await Application.create({
      job: jobId,
      applicant: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Applied successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// MY APPLICATIONS
const myApplications = async (req, res) => {
  try {
    const apps = await Application.find({
      applicant: req.user.id,
    })
      .populate("job")
      .populate("applicant", "name email");

    res.json({
      success: true,
      applications: apps,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// EMPLOYER DASHBOARD APPLICATIONS
const getEmployerApplications = async (req, res) => {
  try {
    const jobs = await Job.find({
      employer: req.user.id,
    });

    const jobIds = jobs.map((job) => job._id);

    const applications = await Application.find({
      job: { $in: jobIds },
    })
      .populate("job")
      .populate("applicant", "name email");

    res.json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// VIEW APPLICANTS FOR ONE JOB
const getJobApplicants = async (req, res) => {
  try {
    const applications = await Application.find({
      job: req.params.jobId,
    }).populate("applicant", "name email");

    res.json({
      success: true,
      applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  applyJob,
  myApplications,
  getEmployerApplications,
  getJobApplicants,
};