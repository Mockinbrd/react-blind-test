import React from "react";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

const Bounce = styled.div`
  animation: 1s ${keyframes`${bounce}`};
`;

const Header = () => {
  return (
    <div className="flex items-center bg-cyan-600 text-white justify-center py-6 text-4xl font-light space-x-6 border border-gray-800 shadow-lg">
      <h1>
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
    </div>
  );
};

export default Header;
