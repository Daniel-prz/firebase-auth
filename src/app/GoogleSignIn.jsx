"use client";
import { useEffect, useState } from "react";
import { auth, provider } from "./firebaseConfig";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
export default function GoogleSignIn() {
  const [userObj, setuserObj] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuserObj(user);
      } else {
        setuserObj(null);
      }
    });
  }, []);
  const handleSignOut = async () => {
    try {
      await signOut(auth);

      setuserObj(null);
      console.log("Signed Out");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Signed In", user);
      setuserObj(user);
    } catch (error) {
      console.error("Error signing in", error);
    }
  };
  return (
    <>
      {!userObj && <p>Welcome, Sign in below</p>}
      {!userObj && (
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
      )}
      {userObj && <p>Welcome back {userObj.displayName}</p>}{" "}
      {userObj && <button onClick={handleSignOut}>Sign Out</button>}
    </>
  );
}
