import React, { useState, useContext, useEffect } from "react";
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

const LogIn = (props) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .login(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        props.history.push("/home");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setError(error.message);
      });
  };

  // Handle submit button
  const displaySubmitButton = btn ? (
    <SubmitButton type="submit">Login</SubmitButton>
  ) : (
    <SubmitButton disabled type="submit">
      Login
    </SubmitButton>
  );

  // Handle Error
  const displayError = error !== "" && (
    <span className="max-w-xs mt-2 border border-red-600 bg-red-100 text-red-600 rounded-md py-2 text-center">
      {error?.message ? error.message : error}
    </span>
  );

  return (
    <CenteredContainer>
      <div className="m-auto">
        <div className="grid grid-cols-1 gap-4 p-8 shadow border rounded-lg bg-primary">
          <h1 className="text-center text-3xl text-secondary font-delius">
            Log in
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
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="•••••••••"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              ></TextInput>
            </ParentInputDiv>
            <div className="flex justify-center mt-8">
              {displaySubmitButton}
            </div>
          </form>
          <div className="mt-2 text-secondary text-xs hover:underline">
            <Link to="/register">New on react-blind-test ? Register now.</Link>
          </div>
        </div>
      </div>
    </CenteredContainer>
  );
};

export default LogIn;
