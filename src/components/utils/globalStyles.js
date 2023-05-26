import styled from "styled-components";
import { colorShades } from "./colorShades";

export const Container = styled.div`
  padding: 4rem 8rem;
  margin: 8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 2000px) {
    margin: 4rem 0;
  }
  @media only screen and (max-width: 1100px) {
    padding: 4rem 2rem;
  }
`;

export const HeadingOne = styled.h1`
  border-bottom: 2px solid ${colorShades.green};
  margin: 2rem 0;
  color: inherit;
`;
export const Content = styled.p`
  user-select: none;
  font-size: 1.2rem;
`;
