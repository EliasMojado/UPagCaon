const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDtrp7X52ywThTQncLWWZABJ1w3yptFz5c",
    authDomain: "upagcaon.firebaseapp.com",
    projectId: "upagcaon",
    storageBucket: "upagcaon.appspot.com",
    messagingSenderId: "630778761341",
    appId: "1:630778761341:web:82e67cf884a83a7f9aa114",
    measurementId: "G-SMHV78Z1YM"
};

firebase.initializeApp(firebaseConfig);

firebase
  .auth()
  .signInAnonymously()
  .then(() => {
    console.log("Connected to Firebase successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to Firebase:", error);
  })

module.exports = firebase;
