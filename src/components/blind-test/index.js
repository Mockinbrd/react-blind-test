import React, { useState, Fragment, useContext, useEffect } from "react";
import { FirebaseContext } from "../firebase";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import tw from "twin.macro";
import PrimaryButton from "../../styles/button/primaryButton";
import fadeAudio from "../../helpers/FadeAudio";
import badAnswerSound from "../../sounds/bad-answer.wav";
import goodAnswerSound from "../../sounds/good-answer.wav";
import { Link } from "react-router-dom";

const PlayingButton = styled(PrimaryButton)`
  ${tw`px-6 py-4 w-80 text-xl font-semibold`}
`;

const FadeIn = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const BlindTest = (props) => {
  let playingButton = (
    <div className="grid grid-cols-1 gap-4 p-8 border shadow bg-primary rounded-lg">
      <PlayingButton onClick={() => getQuestions()}>PLAY</PlayingButton>
    </div>
  );

  const firebase = useContext(FirebaseContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [maxSteps, setMaxSteps] = useState(null);
  const [step, setStep] = useState(null);
  const [score, setScore] = useState(0);
  const [audio, setAudio] = useState(null);
  const [cheers, setCheers] = useState("");
  const [error, setError] = useState("");

  const getQuestions = async () => {
    setLoading(true);
    setMaxSteps(6);
    try {
      const qts = await firebase.fetchQuestions().get();
      setQuestions([]);
      await qts.forEach((doc) => {
        setQuestions((q) => [...q, doc.data()]);
      });
      setStep(0);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const checkAnswer = async (e) => {
    const value = e.target.innerText;
    let isGood = false;
    fadeAudio(audio);
    e.target.classList.remove("bg-secondary", "hover:bg-primary");
    if (value === questions[step].answer) {
      playAnswerValidationSound(true);
      e.target.classList.add("bg-green-600");
      setCheers("Well done !");
      isGood = true;
      const inc = score + 1;
      setScore(inc);
    } else {
      playAnswerValidationSound(false);
      e.target.classList.add("bg-red-600");
      setCheers("Wrong !");
    }
    const inc = step + 1;
    setTimeout(() => {
      if (isGood) {
        e.target.classList.remove("bg-green-600");
      } else {
        e.target.classList.remove("bg-red-600");
      }
      e.target.classList.add("bg-secondary", "hover:bg-primary");
      setCheers("");
      setStep(inc);
    }, 3000);
  };

  const playAudio = (url) => {
    let newAudio = new Audio(url);
    newAudio.addEventListener("play", (_) => {
      newAudio.play();
    });
    newAudio.addEventListener("pause", (_) => {
      newAudio.pause();
    });
    newAudio.volume = 0.51;
    setAudio(newAudio);
    newAudio.play();
  };

  const playAnswerValidationSound = (good) => {
    let newAudio;
    if (good === true) {
      newAudio = new Audio(goodAnswerSound);
    } else {
      newAudio = new Audio(badAnswerSound);
    }
    newAudio.play();
  };

  const endGame = async () => {
    const incGamesPlayed = props.user.gamesPlayed + 1;
    try {
      const usrRef = firebase.fetchUserOrPersistIfNull(props.uid);
      await usrRef.set(
        {
          gamesPlayed: incGamesPlayed,
        },
        { merge: true }
      );
      setError("");
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    playAudio(questions[step]?.audio);
    // eslint-disable-next-line
  }, [step]);

  // Handle "Good Answer" && "Wrong Answer"
  const displayCheers =
    cheers !== "" ? (
      <div className="col-span-full text-primary text-center mb-6 font-delius text-2xl font-bold">
        {cheers}
      </div>
    ) : (
      ""
    );

  // Handle Error
  const displayError = (
    <div className="max-w-xs mt-2 border border-red-600 bg-red-100 text-red-600 rounded-md py-2 text-center">
      {error?.message ? error.message : error}
    </div>
  );

  const grid = (
    <Fragment>
      <FadeIn>
        <div className="grid grid-cols-2 gap-4 p-8 border shadow bg-primary rounded-lg">
          {displayCheers}
          <h2 className="col-span-full text-primary text-center mb-6 font-delius text-xl">
            {questions[step]?.question}
          </h2>
          <button
            onClick={(e) => checkAnswer(e)}
            className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary"
          >
            {questions[step]?.[1]}
          </button>
          <button
            onClick={(e) => checkAnswer(e)}
            className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary"
          >
            {questions[step]?.[2]}
          </button>
          <button
            onClick={(e) => checkAnswer(e)}
            className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary"
          >
            {questions[step]?.[3]}
          </button>
          <button
            onClick={(e) => checkAnswer(e)}
            className="bg-secondary rounded-lg shadow text-secondary p-6 text-center hover:bg-primary"
          >
            {questions[step]?.[4]}
          </button>
        </div>
      </FadeIn>
    </Fragment>
  );

  if (error !== "") return { displayError };

  if (loading)
    return (
      <Fragment>
        <img
          className="w-20 logo-loader"
          src="/images/play-logo.png"
          alt="play button logo"
        ></img>
      </Fragment>
    );

  if (step !== null && step === maxSteps) {
    endGame();
    return (
      <div className="grid grid-cols-1 gap-4 p-8 border shadow bg-primary rounded-lg">
        <h1 className="text-primary text-center text-xl">
          Final score : {score} / {maxSteps}
        </h1>
        <Link to="/home" onClick={() => window.location.reload()}>
          <PlayingButton>PLAY AGAIN</PlayingButton>
        </Link>
      </div>
    );
  }

  return (
    <Fragment>{questions.length === maxSteps ? grid : playingButton}</Fragment>
  );
};

export default BlindTest;
