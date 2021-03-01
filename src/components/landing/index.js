import React, { useRef } from "react";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`} infinite;
`;

const Landing = () => {
  return (
    <div className="flex flex-grow">
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Bounce>
              <button
                type="button"
                class="inline-flex justify-center items-center px-6 py-3 w-64 border border-transparent text-xl font-bold rounded-md shadow text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Inscription
              </button>
            </Bounce>
          </div>
          <div>
            <button
              type="button"
              class="inline-flex justify-center items-center px-6 py-3 w-64 border border-transparent text-xl font-bold rounded-md shadow text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Connexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
