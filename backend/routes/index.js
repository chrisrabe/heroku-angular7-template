const express = require('express');
const router = express.Router();

const mainRouter = require('./main.route');

router.use('/main', mainRouter);

module.exports = router;
