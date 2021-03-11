import React, { useState, Fragment, useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import Questions from "../questions";
import styled from "styled-components";
import tw from "twin.macro";
import PrimaryButton from "../../styles/button/primaryButton";

const PlayingButton = styled(PrimaryButton)`
  ${tw`px-6 py-4 w-80 text-xl font-semibold`}
`;

const BlindTest = () => {
  let playingButton = <PlayingButton onClick={() => getQuestions()}>PLAY</PlayingButton>;

  const firebase = useContext(FirebaseContext);
  const [gameStarted, setGameStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [maxSteps, setMaxSteps] = useState(null);
  const [step, setStep] = useState(0);
  const [body, setBody] = useState (playingButton);

  const getQuestions = async () => {
    setLoading(true);
    setMaxSteps(6);
    try {
      const qts = await firebase.fetchQuestions().get();
      setQuestions([]);
      await qts.forEach((doc) => {
        setQuestions((q) => [...q, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const grid = (
    <Fragment>
      <div className="grid grid-cols-2 gap-4 p-8 border shadow bg-primary rounded-lg">
        <h2 className="col-span-full text-primary text-center mb-6 font-delius text-xl">{questions[step]?.question}</h2>
        <div className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary">{questions[step]?.[1]}</div>
        <div className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary">{questions[step]?.[2]}</div>
        <div className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary">{questions[step]?.[3]}</div>
        <div className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary">{questions[step]?.[4]}</div>
      </div>
    </Fragment>
    );

  useEffect(() => {

  });
  

  if (loading) return (
    <Fragment>
      <img
        className="w-20 logo-loader"
        src="/images/play-logo.png"
        alt="play button logo"
      ></img>
    </Fragment>
  );

  return (
    <Fragment>{questions.length === maxSteps ? grid : playingButton}</Fragment>
  );
};

export default BlindTest;
