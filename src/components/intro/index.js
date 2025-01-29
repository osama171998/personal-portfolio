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
import Mine from "./assets/osama-idrees.png";

function Intro() {
  let currentDate = new Date;
  let currentYear = currentDate.getFullYear()
  const yearExperience = currentYear-2019
  return (
    <MainContainer>
      <IntroLines>
        <PunchLine>I'm Osama Idrees</PunchLine>
        <WhoAmI>Full Stack Web Developer with {yearExperience}+ years of experience</WhoAmI>
        <PortfolioButton href={"#projects"}>Projects</PortfolioButton>
      </IntroLines>
      <ImageContainer>
        <Image src={Mine} data-aos="fade-in" />
      </ImageContainer>
    </MainContainer>
  );
}

export default Intro;
