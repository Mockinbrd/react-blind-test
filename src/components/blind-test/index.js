import React, { useState, Fragment, useContext } from "react";
import { FirebaseContext } from "../firebase";
import Questions from "../questions";
import styled from "styled-components";
import tw from "twin.macro";
import PrimaryButton from "../../styles/button/primaryButton";

const PlayingButton = styled(PrimaryButton)`
  ${tw`px-6 py-4 w-80 text-xl font-semibold`}
`;

const BlindTest = () => {
  const firebase = useContext(FirebaseContext);
  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState({});
  const [loading, setLoading] = useState(false);

  const getQuestions = () => {
    setLoading(true);
    /* firebase
      .fetchQuestions()
      .get()
      .then((questions) => {
        questions.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
        });
      })
      .catch((error) => {
        console.log(error);
      }); */
  };

  let body = <PlayingButton onClick={() => getQuestions()}>PLAY</PlayingButton>;

  return loading ? (
    <Fragment>
      <img
        className="w-20 logo-loader"
        src="/images/play-logo.png"
        alt="play button logo"
      ></img>
    </Fragment>
  ) : (
    <Fragment>{body}</Fragment>
  );
};

export default BlindTest;
