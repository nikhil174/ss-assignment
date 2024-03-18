const express = require('express');
const router = express.Router();
const { uploadDocument } = require("../controllers/document");

router.put('/upload', uploadDocument);

module.exports = router;