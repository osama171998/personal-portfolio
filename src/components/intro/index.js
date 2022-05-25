import React from "react";
import {
  MainContainer,
  IntroLines,
  PunchLine,
  WhoAmI,
  ImageContainer,
  Image,
  PortfolioButton,
} from "./style";
import Mine from "./assets/sample.png";
function Intro() {
  return (
    <MainContainer>
      <IntroLines>
        <PunchLine>I'm Osama Idrees</PunchLine>
        <WhoAmI>I'm Web Developer with 3+ years of experience</WhoAmI>
        <PortfolioButton>Portfolio</PortfolioButton>
      </IntroLines>
      <ImageContainer>
        <Image src={Mine} />
      </ImageContainer>
    </MainContainer>
  );
}

export default Intro;
