import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validateCred } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, seterrorMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSign = () => {
    setSignIn((prevSignIn) => !prevSignIn);
    if (email.current) email.current.value = "";
    if (pwd.current) pwd.current.value = "";
    if (name.current) name.current.value = "";

    seterrorMsg(null);
  };

  const name = useRef();
  const email = useRef();
  const pwd = useRef();

  const handleBtn = () => {
    const msg = validateCred(
      name.current == undefined ? null : name.current.value,
      email.current.value,
      pwd.current.value
    );

    seterrorMsg(msg);

    if (msg) return;

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        pwd.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              seterrorMsg(error.message);
            });
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg("Invalid Credentials");

          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, pwd.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMsg("Invalid Credentials");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute h-full w-full min-h-screen">
        <img
          className="min-h-screen w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_medium.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
        className="p-12 bg-black absolute w-3/12 mx-auto right-0 left-0 m-48 text-white bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4 px-2">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn ? (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-3 my-4 mx-auto w-full bg-gray-700 rounded-md bg-opacity-70"
          />
        ) : null}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 mx-auto w-full bg-gray-700 rounded-md bg-opacity-70"
        />
        <input
          ref={pwd}
          type="password"
          placeholder="Password"
          className="p-3 my-4 mx-auto w-full bg-gray-700 rounded-md bg-opacity-70"
        />
        <p className="text-red-500 font-bold text-md p-2">{errorMsg}</p>
        <button
          className="p-3 my-4 mx-auto bg-red-700 w-full rounded-md"
          onClick={handleBtn}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className=" my-4 cursor-pointer" onClick={handleSign}>
          {signIn ? "New to Netflex? Sign up now" : "Already a member, Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
