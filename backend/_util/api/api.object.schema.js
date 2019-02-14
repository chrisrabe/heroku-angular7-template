/**
 * Object schema description language and validator for Javascript.
 * API Reference: https://github.com/hapijs/joi/blob/v14.3.1/API.md
 */

const baseJoi = require('joi');
const objectId = require('joi-objectid');
const dateExtensions = require('joi-date-extensions');

// extensions
const joi = baseJoi.extend(dateExtensions);
joi.objectId = objectId(joi);

joi.isoFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

module.exports = joi;
