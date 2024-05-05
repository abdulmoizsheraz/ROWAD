const express = require("express");
const {GenerateLogo} = require("../controllers/ImageGen");

const router = express.Router();

router.route("/generateLogo").post(GenerateLogo);


module.exports = router;
