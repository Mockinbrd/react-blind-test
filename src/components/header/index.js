import React from "react";

const Header = () => {
  return (
    <div className="flex items-center bg-cyan-700 text-white justify-center py-6 text-4xl font-light space-x-4">
      <h1>
        <a className="font-pacifico" href="/">
          react-blind-test
        </a>
      </h1>
      <img
        className="w-16"
        src="/images/play-logo.png"
        alt="play button logo"
      ></img>
    </div>
  );
};

export default Header;
