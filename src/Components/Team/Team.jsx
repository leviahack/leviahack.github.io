import React from "react";
import { 
  AboutUsSection,
  SectionText,
  SectionImage,
  TeamImage,
  Title,
  NameImage,
  CardText,
  Text } from './Team.styles';
import Ale from '../../Assets/Ale.JPG';
import Jon from '../../Assets/Jonathan.jpg';
import Adrian from '../../Assets/Adrian.JPG';

const Team = () => {
  return (
    <AboutUsSection id="team">
      <SectionImage>
        <NameImage>
          <img src={Ale} alt="About us"/>
          <span>Alejandra Guerrero</span>
        </NameImage>
        <NameImage>
          <img src={Adrian} alt="About us"/>
          <span>Adrian Salazar</span>
        </NameImage>
        <NameImage>
          <img src={Jon} alt="About us"/>
          <span>Jonathan Ramirez</span>
        </NameImage>
      </SectionImage>
      <SectionText>
        <CardText>
          <Title> Our Team </Title>
          <Text>
            We are Leviahack 💜;
          </Text>
          <TeamImage>
            <img src={Ale} alt="About us" width="33.33%" height="43%"/>
            <img src={Adrian} alt="About us" width="33.33%" height="43%"/>
            <img src={Jon} alt="About us" width="33.33%" height="43%"/>
          </TeamImage>
        </CardText>
      </SectionText>
    </AboutUsSection>
  );
};

export default Team;