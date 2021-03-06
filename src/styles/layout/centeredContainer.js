import tw, { styled } from "twin.macro";
import { fadeIn } from "react-animations";
import { keyframes } from "styled-components";

const CenteredContainer = styled.div`
animation: 1s ${keyframes`${fadeIn}`};
${tw`flex flex-grow`}
`;

export default CenteredContainer;
