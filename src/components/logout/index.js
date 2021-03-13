import React, { useContext } from "react";
import { FirebaseContext } from "../firebase";
import { Link } from "react-router-dom";

const LogOut = (props) => {
  const firebase = useContext(FirebaseContext);
  return (
    <div className="space-x-4 mt-6 text-secondary text-center inset-x-0 absolute top-36">
      <span>Welcome {props.user.name}</span>
      <span>|</span>
      <Link
        to="/profile"
      >
        <span>My profile</span>
      </Link>
      <span>|</span>
      <span>Games played : {props.user.gamesPlayed}</span>
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
