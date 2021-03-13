import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import LogOut from "../logout";
import CenteredContainer from "../../styles/layout/centeredContainer";
import BlindTest from "../blind-test";

const Home = (props) => {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let userListener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push("/");
    });
    return () => {
      userListener();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!!userSession) {
      firebase
        .fetchUserOrPersistIfNull(userSession.uid)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            setUserData(doc.data());
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [userSession]);

  return userSession === null ? (
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
        <LogOut user={userData} />
        <BlindTest user={userData} uid={userSession.uid} />
      </div>
    </CenteredContainer>
  );
};

export default Home;
