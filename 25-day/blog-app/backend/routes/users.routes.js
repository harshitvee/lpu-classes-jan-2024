const express = require("express");
const { signupUser, loginUser } = require("../controllers/users.controllers");
const router = express.Router();

router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);
module.exports = router;
