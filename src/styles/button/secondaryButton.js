import tw, { styled } from "twin.macro";

const SecondaryButton = styled.button`
  ${tw`inline-flex items-center tracking-wider justify-center border border-cyan-600 text-base font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-500`}
`;

export default SecondaryButton;
