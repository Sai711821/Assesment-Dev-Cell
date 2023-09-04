// // // Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/auth'; // If you need authentication
// import 'firebase/firestore'; // If you need Firestore
// // import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey: process.env.REACT_APP_API_KEY,
// //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// //   projectId: process.env.REACT_APP_PROJECT_ID,
// //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// //   appId: process.env.REACT_APP_APP_ID
// // };

// // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // firebase.initializeApp(firebaseConfig)

// //  const auth = getAuth(app);
// // import firebase from "firebase/app"
// // import "firebase/auth"
//  const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// })

//  export const auth = app.auth()

// import { initializeApp } from 'firebase/app'
// import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// }

// const app = initializeApp(firebaseConfig)

// export const auth = getAuth(app)


import firebase  from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,

})

export const auth = app.auth()
export default app;
// import { initializeApp } from "firebase/app";

// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// const db = getFirestore(app);
// const storage = getStorage(app);
// const auth = getAuth(app);

// export  {auth, db , storage};