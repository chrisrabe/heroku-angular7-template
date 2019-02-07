const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const mainController = require('../controllers/main.controller');

router.post('/helloworld',
    asyncHandler(async (req, res, next) => {
        const { arg1 } = req.body;
        const result = await mainController.helloWorld(req, arg1);
        return res.ok({ data: result });
    }));

module.exports = router;
