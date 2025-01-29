import React from "react";
import * as GlobalStyles from "../utils/globalStyles";
import Mine from "./assets/osama-idrees.png";
import * as Styled from "./style";
function AboutMe() {
  return (
    <GlobalStyles.Container id="about-me" data-aos="fade-in">
      <GlobalStyles.HeadingOne>About Me</GlobalStyles.HeadingOne>
      <Styled.AboutMeContainer>
        <Styled.ImageContainer>
          <Styled.Image src={Mine} alt="Osama Idrees" />
        </Styled.ImageContainer>
        <Styled.ContentContainer>
          <GlobalStyles.Content>
            Software Engineer equipped with extensive experience in Full Stack Web development and Product Management.
            Employs excellent leadership skills and multi tasking strengths. Demonstrated ability to improve User Interface,
            developed Dynamic Web Components and communication between different modules of applications through APIs.
            Capable of designing an efficient product plan for timely product delivery.
          </GlobalStyles.Content>
        </Styled.ContentContainer>
      </Styled.AboutMeContainer>
    </GlobalStyles.Container>
  );
}

export default AboutMe;
