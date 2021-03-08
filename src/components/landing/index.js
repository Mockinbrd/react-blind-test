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
              <Link to="/register">
                <RoutingButtun>Register</RoutingButtun>
              </Link>
            </SlideDown>
          </div>
          <div>
            <SlideUp>
              <Link to="/login">
                <RoutingButtun>Log in</RoutingButtun>
              </Link>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
