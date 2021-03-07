import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import Logout from "../logout";
import CenteredContainer from "../../styles/layout/centeredContainer";
import BlindTest from "../blind-test";

const Home = (props) => {
  const [user, setUser] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    let userListener = firebase.auth.onAuthStateChanged((userSession) => {
      userSession ? setUser(userSession) : props.history.push("/");
    });

    return () => {
      userListener();
    };
  }, []);

  return user === null ? (
    <CenteredContainer>
      <div className="m-auto">
        <img
          className="w-20 logo-loader"
          src="/images/play-logo.png"
          alt="play button logo"
        ></img>
      </div>
    </CenteredContainer>
  ) : (
    <CenteredContainer>
      <div className="m-auto">
        <Logout user={user} />
        <BlindTest />
      </div>
    </CenteredContainer>
  );
};

export default Home;
