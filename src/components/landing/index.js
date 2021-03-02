import React, { useRef } from "react";
import { slideInDown, slideInUp, fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const SlideDown = styled.div`
  animation: 1s ${keyframes`${slideInDown}`};
`;

const SlideUp = styled.div`
  animation: 1s ${keyframes`${slideInUp}`};
`;

const FadeIn = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;

const Landing = () => {
  return (
    <div className="flex flex-grow">
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <SlideDown>
              <button
                type="button"
                class="inline-flex justify-center tracking-wider font-semibold items-center px-6 py-4 w-80 border border-transparent text-xl rounded-md shadow text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Inscription
              </button>
            </SlideDown>
          </div>
          <div>
            <FadeIn>
              <button
                type="button"
                class="inline-flex justify-center tracking-wider font-semibold items-center px-6 py-4 w-80 border border-transparent text-xl rounded-md shadow text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Connexion
              </button>
            </FadeIn>
          </div>
          <div>
            <SlideUp>
              <button
                type="button"
                class="inline-flex justify-center tracking-wider font-medium items-center px-6 py-4 w-80 border border-gray-300 shadow text-lg rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Continuer sans s'inscrire
              </button>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
