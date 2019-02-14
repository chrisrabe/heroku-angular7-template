const express = require('express');
const router = express.Router();

const tutorialsRouter = require('./tutorials.route');

router.use('/tutorials', tutorialsRouter);

module.exports = router;
