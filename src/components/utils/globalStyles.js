import styled from "styled-components";
import { colorShades } from "./colorShades";
export const Container = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8rem;
  @media only screen and (max-width: 1100px) {
    padding: 0 2rem;
  }
`;

export const HeadingOne = styled.h1`
  border-bottom: 2px solid ${colorShades.green};
  margin: 1rem 0; ;
`;
