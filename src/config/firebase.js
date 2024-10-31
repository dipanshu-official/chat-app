// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import {doc, DocumentSnapshot, getFirestore, limitToLast, setDoc} from "firebase/firestore"
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYjvtWuI0VcjSEaGy2t7CTbzs_TeNbUMM",
  authDomain: "chat-app-js-72538.firebaseapp.com",
  projectId: "chat-app-js-72538",
  storageBucket: "chat-app-js-72538.appspot.com",
  messagingSenderId: "700662886555",
  appId: "1:700662886555:web:90d28e8ed39adcc922963e",
  measurementId: "G-74C45LRFXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore (app);


const signup = async (username , email ,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth ,email,password);
        const user =res.user;
        await setDoc(doc(db , "users" ),{
            id:user.uid,
            username:username.toLowerCasw() ,
            email,
            name:"",
            avtar:"",
            bio:"Hey , There i am using chat app",
            lastseen:Date.now()
        })

        await setDoc(doc(db ,"chats" ),{
            chatData:[]

        })
    } catch (error) {
        console.error(error)
        toast.error(error.code)
        
    }

}

export {signup}