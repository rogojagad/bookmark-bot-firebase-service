const responseStatus = require('../responseStatus');

const validate = (schema) => {
    return (req, res, next) => {
        const options = {
            abortEarly: false,
        };

        const { error } = schema.validate(req.body, options);

        if (error) {
            const errors = error.details.map(detail => {
                return detail.message.replace(/"/g, '');
            });
            console.log(errors);
            return res.status(responseStatus.badRequest).json({
                errors
            });
        } else {
            next();
        }
    };
};

module.exports = { validate };