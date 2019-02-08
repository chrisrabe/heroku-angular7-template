const baseJoi = require('joi');
const objectId = require('joi-objectid');
const dateExtensions = require('joi-date-extensions');

// extensions
const joi = baseJoi.extend(dateExtensions);
joi.objectId = objectId(joi);

joi.isoFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

module.exports = joi;
