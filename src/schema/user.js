const Joi = require('joi');

const createUserPayload = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = {
    createUserPayload
};