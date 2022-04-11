import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthenticaiton from "../Pages/Login/Firebase/firebase.init";

// initialize firebase
initializeAuthenticaiton();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // for checking if the user is admin or not
  const [admin, setAdmin] = useState(false);

  //   register user
  const registerUser = (email, password) => {
    setIsLoading(true);
    // i am just returning the promise here to do some extrea things on sign up page
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  login with email and password
  const loginWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in With google
  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        alert("Logout Successfull");
      })
      .finally(() => setIsLoading(false));
  };

  // update user name while user sign up
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };

  // save user details for after register
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .post("http://localhost:5000/users", user)
      .then((res) => console.log(res.data));
  };

  // save user details after google sign-in
  const saveGoogleSigninUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .put("http://localhost:5000/users", user)
      .then((res) => console.log(res.data));
  };

  // setting an observer to hanlde user state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          localStorage.setItem("idToken", idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    // this clean up function is for better performance a little bit
    return () => unsubscribe;
  }, [auth]);

  // to check the user is admin or not
  // akane user.email k dependency dite hobe karon first time render howar somoy user er inintal value empty object takhe jar karone
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${user.email}`)
      .then((res) => setAdmin(res.data.admin));
  }, [user.email]);

  return {
    user,
    setUser,
    registerUser,
    updateName,
    admin,
    isLoading,
    setIsLoading,
    loginWithEmail,
    logOut,
    signinWithGoogle,
    saveUser,
    saveGoogleSigninUser,
  };
};
export default useFirebase;
// now we'll add facebook login and twitter login here.
