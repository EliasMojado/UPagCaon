const admin = require("firebase-admin");

// Set the configuration for your app
const serviceAccount = require("../upagcaon-firebase-adminsdk-w3dp5-1554c78714.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "upagcaon.appspot.com" // Replace with your storage bucket URL
});

const storage = admin.storage();

module.exports = storage;
