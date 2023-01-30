import React from "react";
import { 
  AboutUsSection,
  SectionText,
  SectionImage,
  ImageResponsive,
  Title,
  CardText,
  Text } from './AboutUs.styles';
import Levihack from '../../Assets/leviahack.png';

const AboutUs = () => {
  return (
    <AboutUsSection id="about-us">
      <SectionText>
        <CardText>
          <Title> About us </Title>
          <Text>
            Leviahack is a technology services consultancy. It was
            born as an idea to help to solve the technological problems
            on Frontend and Mobile that we face today.
            It was formed and created by friends with the same
            purposes, goals and ideas.
          </Text>
          <ImageResponsive>
            <img src={Levihack} alt="About us" width="30%"/>
          </ImageResponsive>
        </CardText>     
      </SectionText>
      <SectionImage>
        <img src={Levihack} alt="About us" width="70%"/>
      </SectionImage>
    </AboutUsSection>
  );
};

export default AboutUs;