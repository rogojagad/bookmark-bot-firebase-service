const admin = require('firebase-admin');

let serviceAccount = require('./../../firebase.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin.firestore(); 