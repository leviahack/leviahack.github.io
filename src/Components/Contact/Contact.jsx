import React from "react";
import { 
  AboutUsSection,
  SectionText,
  BannerFinal,
  Copyright,
  Email,
  Title,
  CardText,
  Text } from './Contact.styles';
import Levihack from '../../Assets/leviahack.png';

const Contact = () => {
  return (
    <AboutUsSection id="contact">
      <SectionText>
        <CardText>
          <Title>Contact</Title>
          <Text>
            Contact us!
            <Email>
              <a href="mailto:leviahack@gmail.com?subject=Questions&body=Preguntas y/o dudas">leviahack@gmail.com</a>
            </Email>
            <BannerFinal>
              <img src={Levihack} alt="logo"/>
            </BannerFinal>
          </Text>
        </CardText>
        <Copyright>
          © Leviahack 2023
        </Copyright>     
      </SectionText>
    </AboutUsSection>
  );
};

export default Contact;