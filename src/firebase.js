// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyASu--lgSOVa6dMYzFekN2HDh7dOkg7r20" ,
  authDomain:"rc-app-bd223.firebaseapp.comm" ,
  databaseURL:"https://rc-app-bd223.firebaseio.com" ,
  projectId:"rc-app-bd223",
  storageBucket:"rc-app-bd223" ,
  messagingSenderId:"482659143331",
  appId:"1:482659143331:web:8d4cf900c3908ec0e33916",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCNjIBCj_8JStUwiiiqsHhjoHCRIVAYUu4",
//   authDomain: "chat-app-b0d0e.firebaseapp.com",
//   projectId: "chat-app-b0d0e",
//   storageBucket: "chat-app-b0d0e.appspot.com",
//   messagingSenderId: "1079693715325",
//   appId: "1:1079693715325:web:bcdbaeaed3250cdad98e14"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);