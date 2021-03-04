import React from "react";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";
import { ToggleDarkTheme } from "./toggleDarkTheme";

const Bounce = styled.div`
  animation: 1s ${keyframes`${bounce}`};
`;

const Header = () => {
  return (
    <div className="flex items-center bg-header justify-center py-6 space-x-6 shadow-lg">
      <h1 className="text-4xl font-light text-white">
        <a className="font-pacifico" href="/">
          react-blind-test
        </a>
      </h1>
      <Bounce>
        <img
          className="w-16 App-logo"
          src="/images/play-logo.png"
          alt="play button logo"
        ></img>
      </Bounce>
      <div className="absolute top-12 right-12">
        <ToggleDarkTheme />
      </div>
    </div>
  );
};

export default Header;
