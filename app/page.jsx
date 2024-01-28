"use client"
import "@styles/customs-styles.css";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import ChatRoom  from "@components/functions/function-chat-room";
import  SignIn  from "@components/functions/function-signin";
import  SignOut  from "@components/functions/function-signout";

const firebaseConfig = {
  appId: "1:454289704797:web:7a9b960cd6657340940ab4",
  apiKey: "AIzaSyAFWg6jbB5dIkMVKpXrYZg5pWM1Yex20OI",
  authDomain: "chat-firebase-nexjts.firebaseapp.com",
  projectId: "chat-firebase-nexjts",
  storageBucket: "chat-firebase-nexjts.appspot.com",
  messagingSenderId: "112892988237",
  appId: "1:112892988237:web:24b9dd2f15feb2f37c8504",
  measurementId: "G-S35KMREB85",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const firestore = getFirestore(app);
// const analytics = getAnalytics(app);

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut auth={auth} />
      </header>

      <section>
        {user ? (
          <ChatRoom firestore={firestore} auth={auth} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
}
