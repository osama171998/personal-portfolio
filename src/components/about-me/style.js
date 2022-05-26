import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;
export const ContentContainer = styled.div`
  width: 70%;
  height: 300px;
  line-height: 2rem;
  display: flex;
  align-items: center;
`;
export const ImageContainer = styled.div`
  width: 29%;
  display: flex;
  justify-content: center;
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  filter: drop-shadow(5px 0px 10px rgba(0, 0, 0, 0.8));
`;
