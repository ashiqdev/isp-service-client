import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2l1MItIlodkgAFbuU9ILuuckKC-7SxJg',
  authDomain: 'assignment-11-65e13.firebaseapp.com',
  projectId: 'assignment-11-65e13',
  storageBucket: 'assignment-11-65e13.appspot.com',
  messagingSenderId: '209310896165',
  appId: '1:209310896165:web:fb7b8e82fc6b6fe98f6fcc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuthProvider };
