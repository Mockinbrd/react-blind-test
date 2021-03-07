import React, { useContext } from "react";
import { FirebaseContext } from "../firebase";

const LogOut = (props) => {
  const firebase = useContext(FirebaseContext);
  const displayName = props.user.email.split("@");
  return (
    <div className="space-x-4 mt-6 text-secondary text-center inset-x-0 absolute top-36">
      <span>Welcome {displayName[0]}</span>
      <span>|</span>
      <button
        className="focus:outline-none hover:underline"
        onClick={firebase.logout}
      >
        Log out
      </button>
    </div>
  );
};

export default LogOut;
