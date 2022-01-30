const Joi = require('joi');

const createCategoryPayload = Joi.object({
    name: Joi.string().required(),
    color: Joi.string().required(),
});

module.exports = {
    createCategoryPayload
};