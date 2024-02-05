const express = require("express");
const {
  getAllGuitars,
  getSingleGuitar,
} = require("../controllers/guitars.controllers");
const router = express.Router();

router.route("/").get(getAllGuitars);

router.route("/:id").get(getSingleGuitar);

module.exports = router;
