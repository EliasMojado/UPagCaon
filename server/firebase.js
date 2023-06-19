// const firebase = require("firebase/app");
// require("firebase/storage");

// // Set the configuration for your app
// // TODO: Replace with your app's config object
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "upagcaon.firebaseapp.com",
//   projectId: "upagcaon",
//   storageBucket: "upagcaon.appspot.com",
//   messagingSenderId: "630778761341",
//   appId: "1:630778761341:web:82e67cf884a83a7f9aa114",
//   measurementId: "G-SMHV78Z1YM"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();

// module.exports = storage;


const admin = require("firebase-admin");

// Set the configuration for your app
const serviceAccount = require("../upagcaon-firebase-adminsdk-w3dp5-1554c78714.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "upagcaon.appspot.com" // Replace with your storage bucket URL
});

const storage = admin.storage();

module.exports = storage;
