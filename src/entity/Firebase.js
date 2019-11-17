const admin = require('firebase-admin');

let serviceAccount = require('./../../bookmark-bot-9cda3-d405096bde01.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin.firestore(); 