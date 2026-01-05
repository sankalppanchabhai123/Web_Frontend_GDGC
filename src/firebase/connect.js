// Import the functions you need from the SDKs you need
// <<<<<<< HEAD
// import "dotenv/config"
// =======
// import "dotenv/config.js"
// >>>>>>> 97ef6bc988f912c89113c3155baa8c13a2eb5ffd
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< Updated upstream
    apiKey: process.env.REACT_APP_apiKey || "AIzaSyBdZRjKJdKJdKJdKJdKJdKJdKJdKJdKJdK",
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId || "gdgc-15637945",
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId || "1:123456789:web:abc123def456",
    measurementId: process.env.REACT_APP_measurementId
=======
    apiKey: "your_api_key_here",
    authDomain: "your_project_id.firebaseapp.com",
    projectId: "your_project_id_here",
    storageBucket: "your_project_id.appspot.com",
    messagingSenderId: "your_messaging_sender_id_here",
    appId: "your_app_id_here",
    measurementId: "your_measurement_id_here"
>>>>>>> Stashed changes
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export { db }
