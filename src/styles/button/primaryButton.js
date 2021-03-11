import tw, { styled } from "twin.macro";

const PrimaryButton = styled.button`
  ${tw`inline-flex items-center tracking-wider justify-center border border-cyan-600 rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-500`}
`;

export default PrimaryButton;
