import React from "react";
import * as GlobalStyles from "../utils/globalStyles";
import Mine from "./assets/sample.png";
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
            Software Engineer equipped with extensive experience in Full Stack
            Web Development. Employs excellent leadership skills and
            multi-tasking strengths. Demonstrated ability to improve User
            Interface, developed Dynamic Web Components. Looking forward to
            leveraging my strong creative thinking, integration of APIs,
            developing of dynamic and reusable web components, task oriented
            python scripts, software development, concept & content development,
            React Js/CSS3/GIT/HTML5/MySQL corporate communication and web
            services/front-end skills to exceed organizational goals.
          </GlobalStyles.Content>
        </Styled.ContentContainer>
      </Styled.AboutMeContainer>
    </GlobalStyles.Container>
  );
}

export default AboutMe;
