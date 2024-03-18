const express = require('express');
const router = express.Router();
const { signin, signup } = require("../controllers/user");

router.put('/signup', signup);
router.put('/signin', signin)

module.exports = router;