const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const controller = require('../controllers/tutorial.controller');

router.post('/list', asyncHandler(async (req, res, next) => {
    try {
        const tutorials = await controller.list(req);
        return res.ok({tutorials});
    } catch (e) {
        return res.handleError(e, req);
    }
}));

module.exports = router;
