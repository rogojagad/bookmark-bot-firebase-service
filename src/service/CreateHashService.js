const crypto = require('crypto');

exports.create = (plainString) => {
    return crypto.createHash('md5').update(plainString.toLowerCase()).digest('hex');
};
