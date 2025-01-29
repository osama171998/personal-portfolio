import React,{useEffect,useState} from "react";
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
  const [yearExperience,setYearExperience] = useState(null)
  useEffect(()=>{
    let currentDate = new Date;
    let currentYear = currentDate.getFullYear()
    const yearCalculate = currentYear-2019
    setYearExperience(yearCalculate)
  },[])
  
  
 
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
