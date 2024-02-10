const express = require("express");
const { signupUser } = require("../controllers/users.controllers");
const router = express.Router();

router.route("/signup").post(signupUser);
module.exports = router;
