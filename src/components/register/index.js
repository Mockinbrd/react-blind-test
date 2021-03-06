import React, { useState, useContext } from "react";
import { FirebaseContext } from "../firebase";
import tw, { styled } from "twin.macro";
import PrimaryButton from "../../styles/button/primaryButton";
import CenteredContainer from "../../styles/layout/centeredContainer";
import { Link } from "react-router-dom";

const TextInput = styled.input`
  ${tw`focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 sm:text-sm border-gray-300 rounded-md`}
`;
const TwLabel = styled.label`
  ${tw`block text-sm font-medium text-secondary mt-6`}
`;
const ParentInputDiv = styled.div`
  ${tw`mt-1 relative rounded-md shadow-sm`}
`;
const ParentSvgDiv = styled.div`
  ${tw`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}
`;
const SubmitButton = styled(PrimaryButton)`
  ${tw`px-5 py-2 w-80 font-medium`}
  ${({ disabled }) => disabled && tw`opacity-25 cursor-not-allowed`}
`;

const Register = (props) => {
  const firebase = useContext(FirebaseContext);

  const data = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [registerData, setRegisterData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = registerData;
    firebase
      .register(email, password)
      .then((user) => {
        setRegisterData({ ...data });
        setError("");
        props.history.push("/home");
      })
      .catch((error) => {
        setError(error);
        setRegisterData({ ...data });
      });
  };

  const { email, password, confirmPassword } = registerData;

  const displaySubmitButton =
    email === "" || password === "" || password !== confirmPassword ? (
      <SubmitButton disabled type="submit">
        Sign Up
      </SubmitButton>
    ) : (
      <SubmitButton type="submit">Sign Up</SubmitButton>
    );

  // Handle Error
  const displayError = error !== "" && (
    <span className="max-w-xs mt-2 border border-red-600 bg-red-100 text-red-600 rounded-md py-2 text-center">
      {error.message}
    </span>
  );

  return (
    <CenteredContainer>
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-4 p-8 shadow border rounded-lg bg-primary">
          <h1 className="text-center text-3xl text-secondary font-delius">
            Register
          </h1>
          {displayError}
          <form className="w-80" onSubmit={handleSubmit}>
            <TwLabel htmlFor="email">Email</TwLabel>
            <ParentInputDiv>
              <ParentSvgDiv>
                <svg
                  tw="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </ParentSvgDiv>
              <TextInput
                type="email"
                id="email"
                placeholder="you@example.com"
                onChange={handleChange}
                value={email}
              ></TextInput>
            </ParentInputDiv>
            <TwLabel htmlFor="password">Password</TwLabel>
            <ParentInputDiv>
              <ParentSvgDiv>
                <svg
                  tw="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              </ParentSvgDiv>
              <TextInput
                type="password"
                id="password"
                placeholder="•••••••••"
                onChange={handleChange}
                value={password}
              ></TextInput>
            </ParentInputDiv>
            <TwLabel htmlFor="passwordConfirmation">
              Password confirmation
            </TwLabel>
            <ParentInputDiv>
              <ParentSvgDiv>
                <svg
                  tw="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              </ParentSvgDiv>
              <TextInput
                type="password"
                id="confirmPassword"
                placeholder="•••••••••"
                onChange={handleChange}
                value={confirmPassword}
              ></TextInput>
            </ParentInputDiv>
            <div className="flex justify-center mt-8">
              {displaySubmitButton}
            </div>
          </form>
          <div className="mt-2 text-secondary text-xs hover:underline">
            <Link to="/login">Already have an account ? Log in instead.</Link>
          </div>
        </div>
      </div>
    </CenteredContainer>
  );
};

export default Register;
