import styled, { keyframes } from "styled-components";
import { Size } from "../../Constants/SizesMediaQueries";
import { TextCaptions } from "../../Constants/TextCaptions";

export const pulse = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const spin = keyframes`
  0% {
    content: '${TextCaptions.firstText}';
  }
  20% {
    content: '${TextCaptions.twoSecond}';
  }
  40% {
    content: '${TextCaptions.threeText}';
  }
  60% {
    content: '${TextCaptions.fourText}';
  }
  80% {
    content: '${TextCaptions.fiveText}';
  }
  100% {
    content: '${TextCaptions.firstText}';
  }
`;

export const TextFloat = styled.div`
  position: absolute;
  font-weight: 600;
  top: 50%;
  left: 7%;
  transform: translate(-7%, -50%);
  font-size: 45px;
  color: #1f7391;
  animation: ${pulse} 2s linear infinite;

  &:after {
    content: '';  
    animation: ${spin} 10s linear infinite 1s;// add this 1s
  }

  @media (max-width: ${Size.tablet}) {
		top: 20%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -20%);
    width: 90%;
	}
`;