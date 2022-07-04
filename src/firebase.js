// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZs9gY0ZLB2OvmQnkU6fxH8BfWHVAvCTk",
    authDomain: "eindopdracht-frontend.firebaseapp.com",
    projectId: "eindopdracht-frontend",
    storageBucket: "eindopdracht-frontend.appspot.com",
    messagingSenderId: "1032265927013",
    appId: "1:1032265927013:web:2315b0ad5c48c19559398c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

