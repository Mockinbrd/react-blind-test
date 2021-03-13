import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import CenteredContainer from "../../styles/layout/centeredContainer";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const Profile = (props) => {
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

  return (
    <CenteredContainer>
      <div className="m-auto">
        <FadeIn>
          <div className="grid grid-cols-1 gap-4 p-8 border shadow bg-primary rounded-lg">
            <button
              onClick={() => props.history.goBack()}
              className="px-4 py-1 mb-6 bg-secondary text-secondary border rounded-lg focus:outline-none"
            >
              Go back
            </button>
            <h2 className="text-primary text-center mb-6 font-delius text-2xl">
              My Profile
            </h2>
            <div className="text-primary text-center">
              Name : {userData.name}
            </div>
            <div className="text-primary text-center">
              Email : {userData.email}
            </div>
            <div className="text-primary text-center">
              Games played : {userData.gamesPlayed}
            </div>
          </div>
        </FadeIn>
      </div>
    </CenteredContainer>
  );
};

export default Profile;
