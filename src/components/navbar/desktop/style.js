import styled from "styled-components";
import { colorShades } from "../../utils/colorShades";
export const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;

  & .active {
    border-bottom: 1.5px solid ${colorShades.green};
    color: ${colorShades.green};
  }
`;

export const NavBarItems = styled.a`
  padding: 0rem 1rem;
  cursor: pointer;
  color: inherit;
  text-decoration: inherit; ;
`;
