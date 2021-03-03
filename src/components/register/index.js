import React from "react";
import tw, { styled } from "twin.macro";

const textInput = styled.input`
  ${tw`focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md`}
`;
const twLabel = styled.label`
  ${tw`block text-sm font-medium text-gray-700`}
`;
const parentInputDiv = styled.div`
  ${tw`mt-1 relative rounded-md shadow-sm`}
`;
const parentSvgDiv = styled.div`
  ${tw`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}
`;

const Register = () => {
  return (
    <div className="flex flex-grow">
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-6">
          <h1>Register</h1>
          <form>
            <twLabel htmlFor="email">Email</twLabel>
            <parentInputDiv>
              <parentSvgDiv>
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </parentSvgDiv>
              <textInput
                type="email"
                id="email"
                placeholder="you@example.com"
              ></textInput>
            </parentInputDiv>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
