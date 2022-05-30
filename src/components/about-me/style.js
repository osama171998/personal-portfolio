import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 90%;
`;
export const ContentContainer = styled.div`
  width: 70%;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  padding: 1rem;
`;
export const ImageContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
  filter: drop-shadow(5px 0px 10px rgba(0, 0, 0, 0.5));
  @media only screen and (min-width: 800px) {
    max-width: 250px;
    max-height: 250px;
  }
`;
