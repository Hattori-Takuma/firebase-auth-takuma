// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase

const apps = getApps
if (!apps.length) {
  initializeApp(firebaseConfig)
}
export const auth = getAuth();

export const createUser = async (email, password) => {
  // eslint-disable-next-line 
  let result2 = ""
  console.log("createUser")
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // eslint-disable-next-line 
      const user = userCredential.user;
      console.log("s")
      result2 = "success"
      // ...
    })
    .catch((error) => {
      //const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage)
      result2 = "error"
    });
  return result2
}

export const login = async (email, password) => {
  let result = ""
  console.log(email, password)
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // eslint-disable-next-line
      console.log("s")

      result = "success"

    })
    .catch((error) => {
      // eslint-disable-next-line
      //const errorCode = error.code;
      // eslint-disable-next-line

      result = "error"
    });
  console.log(result, "result")
  return result
}
