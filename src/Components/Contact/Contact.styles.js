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
  background-color: #dee7ea;
  display: flex;
  align-items: center;
	height: 100vh;
  position: relative;
	width: 100%;

  @media (max-width: ${Size.tablet}) {
    align-items: start;
  }
`;

export const BannerFinal = styled.div`
  img {
    margin: 30px 0;
    width: 20%
  }

  @media (max-width: ${Size.tablet}) {
    img {
      width: 80%
    }
  }
`;

export const CardText = styled.div`
  border-radius: 5px;
  height: 50vh;
  margin: 0 auto;
  width: 60%;
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
  text-align: center;
`;

export const Email = styled.p`
  a {
    color: #626666;
    font-size: 15px;
    text-align: center;
  }
`;

export const Copyright = styled.span`
  color: #626666;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.9;
  padding: 20px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;
