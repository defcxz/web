import { initializeApp } from 'firebase/app';
import { 
   getAuth, 
   signInWithEmailAndPassword,
   onAuthStateChanged
} from 'firebase/auth';

export const firebaseConfig = {
   apiKey: "AIzaSyApVasbas3hZaIYbl4_rUBQnvFZwN3I1i8",
   authDomain: "web-nextjs.firebaseapp.com",
   projectId: "web-nextjs",
   storageBucket: "web-nextjs.appspot.com",
   messagingSenderId: "1084332054449",
   appId: "1:1084332054449:web:129b22e616bdc4b2d44f90"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const signIn = (auth, email, password) => signInWithEmailAndPassword(auth, email, password);
export const signOut = (auth) => auth.signOut();
export const onAuth = (auth, callback) => onAuthStateChanged(auth, callback);

export default firebaseApp;