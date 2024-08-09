import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR, LOGO, languages } from "../utils/constant";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div
      className="w-screen absolute px-6 py-2 bg-gradient-to-b from-black z-10 flex flex-col  
    sm: md:flex-row md:justify-between"
    >
      {/* <img
        src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900"
        alt="logo"
      /> */}
      <img className="md:w-36 lg:w-56 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex">
          {showGPTSearch && (
            <div className="mx-4">
              <select
                className="p-4 mx-4 my-6 rounded-md bg-gray-900  border border-spacing-1  opacity-100 text-white "
                onChange={handleLangChange}
              >
                {languages.map((lang) => (
                  <option key={lang.id} value={lang.id}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            className="px-6 py-1 my-6 bg-purple-800 text-white rounded-md "
            onClick={handleSearchClick}
          >
            {showGPTSearch ? "Home" : "Search AI"}
          </button>
          <div onClick={handleSignOut} className="flex p-4 m-1">
            <img
              className="w-12 h-12 m-2 rounded-xl cursor-pointer"
              src={USER_AVATAR}
              // src={user?.photoURL}
              alt="userIcon"
            />
            <button className="font-bold text-white">
              {user?.displayName}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
