const Joi = require('joi');

const createBookmarkPayload = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    url: Joi.string().uri.required()
});

module.exports = {
    createBookmarkPayload
};