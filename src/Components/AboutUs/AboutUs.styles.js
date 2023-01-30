import styled from "styled-components";
import { Size } from "../../Constants/SizesMediaQueries";

export const AboutUsSection = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const SectionText = styled.section`
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
	height: 100vh;
	width: 100%;

  @media (max-width: ${Size.tablet}) {
    align-items: start;
  }
`;

export const ImageResponsive = styled.div`
  display: none;
  text-align: center;

  @media (max-width: ${Size.tablet}) {
    display: block;
  }
`;

export const CardText = styled.div`
  border-radius: 5px;
  height: 50vh;
  margin: 30px;
  width: 100%;
`;

export const Title =  styled.h2`
  color: #1d1f1f;
  text-align: center;
  font-size: 48px;
  letter-spacing: .15em;
  width: 100%;
`;

export const Text = styled.p`
  color: #626666;
  font-size: 25px;
  font-weight: 300;
  text-align: justify;
  line-height: 1.9;
  padding: 20px;
`;

export const SectionImage = styled.section`
  background-color: #483d8b; //darkslateblue
  display: flex;
  align-items: center;
  justify-content: center;
	height: 100vh;
	width: 100%;

  @media (max-width: ${Size.tablet}) {
    display: none;
  }
`;
