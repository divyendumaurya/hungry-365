// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey:import.meta.env.ITE_FIREBASE_API_KEY ,
  apiKey:"AIzaSyB5dqaIp6D_l2joM5zPboCyzWO6a6fyto8" ,
  authDomain: "hungry365-de56c.firebaseapp.com",
  projectId: "hungry365-de56c",
  storageBucket: "hungry365-de56c.appspot.com",
  messagingSenderId: "884354360167",
  appId: "1:884354360167:web:6aee0c06fcf658ffb0c5c2",
  measurementId: "G-8981113XLZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);