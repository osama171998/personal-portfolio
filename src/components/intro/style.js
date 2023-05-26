import styled from "styled-components";
import { colorShades } from "../utils/colorShades";
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  flex-grow: 1;
  height: inherit;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
export const IntroLines = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1rem;
  text-align: center;
  color: inherit;
`;
export const PunchLine = styled.h1`
  font-size: 4rem;
  color: inherit;
  @media only screen and (max-width: 1400px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 2rem;
  }
`;
export const WhoAmI = styled.p`
  font-size: 2rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1rem;
  }
`;
export const PortfolioButton = styled.a`
  border: 1px solid ${colorShades.green};
  background: ${colorShades.green};
  padding: 1rem 2rem;
  border-radius: 25px;
  color: ${colorShades.grey};
  cursor: pointer;

  &:hover {
    background: ${colorShades.grey};
    color: ${colorShades.green};
    transition: all 0.6s ease-in;
    border: 1px solid ${colorShades.green};
  }
`;
export const ImageContainer = styled.div`
  flex: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: 900px) {
    height: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;

export const Image = styled.img`
  height: 70%;
  @media only screen and (max-width: 1100px) {
    width: 600px;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
