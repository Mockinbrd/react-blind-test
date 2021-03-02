import React from "react";
import { rotateIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const Tada = styled.div`
  animation: 5s ${keyframes`${rotateIn}`};
`;

const Header = () => {
  return (
    <div className="flex items-center bg-cyan-700 text-white justify-center py-6 text-4xl font-light space-x-4">
      <h1>
        <a className="font-pacifico" href="/">
          react-blind-test
        </a>
      </h1>
      <Tada>
        <img
          className="w-16"
          src="/images/play-logo.png"
          alt="play button logo"
        ></img>
      </Tada>
    </div>
  );
};

export default Header;
