import React from "react";
import { slideInDown, slideInUp } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import PrimaryButton from "../../styles/button/primaryButton";
import tw from "twin.macro";

const SlideDown = styled.div`
  animation: 1s ${keyframes`${slideInDown}`};
`;
const SlideUp = styled.div`
  animation: 1s ${keyframes`${slideInUp}`};
`;
const RoutingButtun = styled(PrimaryButton)`
  ${tw`px-6 py-4 w-80 text-xl font-semibold`}
`;

const Landing = () => {
  return (
    <div className="flex flex-grow">
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-4 p-8 border shadow bg-primary rounded-lg">
          <div>
            <SlideDown>
<<<<<<< HEAD
              <Link
                type="button"
                class="inline-flex justify-center tracking-wider font-semibold items-center px-6 py-4 w-80 border border-cyan-600 text-xl rounded-md shadow text-cyan-700 bg-cyan-100 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-500"
                to="/register"
              >
                Inscription
=======
              <Link to="/register">
                <RoutingButtun>Register</RoutingButtun>
>>>>>>> 0ec7f982101faed48d5214256227c56fb57e18df
              </Link>
            </SlideDown>
          </div>
          <div>
<<<<<<< HEAD
            <FadeIn>
              <Link
                type="button"
                class="inline-flex justify-center tracking-wider font-semibold items-center px-6 py-4 w-80 border border-cyan-600 text-xl rounded-md shadow text-cyan-700 bg-cyan-100 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-500"
                to="/login"
              >
                Connexion
              </Link>
            </FadeIn>
          </div>
          <div>
            <SlideUp>
              <Link
                type="button"
                class="inline-flex justify-center tracking-wider font-medium items-center px-6 py-4 w-80 border border-gray-300 shadow text-lg rounded-md text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-900 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                to="/home"
              >
                Continuer sans s'inscrire
=======
            <SlideUp>
              <Link to="/login">
                <RoutingButtun>Log in</RoutingButtun>
>>>>>>> 0ec7f982101faed48d5214256227c56fb57e18df
              </Link>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
