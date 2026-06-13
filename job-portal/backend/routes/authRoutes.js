const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

// test route
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working",
  });
});

// register
router.post("/register", registerUser);

// login (MISSING BEFORE)
router.post("/login", loginUser);

module.exports = router;