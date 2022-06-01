import styled from "styled-components";
import { colorShades } from "../../utils/colorShades";
export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0;
  background: ${({ bgColor, darkMode }) =>
    darkMode ? colorShades.black : bgColor ? colorShades.grey : "transparent"};
  z-index: 99;

  & .active {
    border-bottom: 1.5px solid ${colorShades.green};
    color: ${colorShades.green};
  }
`;

export const NavBarItems = styled.a`
  padding: 0rem 1rem;
  cursor: pointer;
  color: ${({ darkMode }) => (darkMode ? colorShades.grey : "inherit")};
  text-decoration: inherit;
`;
export const ScrollTopContainer = styled.div`
  position: fixed;
  top: 90%;
  right: 2%;
  cursor: pointer;
  background-color: ${colorShades.green};
  border-radius: 50%;
  padding: 1rem 1rem;
  filter: drop-shadow(4px 4px 12px rgba(0, 0, 0, 0.5));
  color: ${colorShades.grey};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UpwardArrowImage = styled.img`
  width: 15px;
  height: 15px;
`;

export const DarkModeIcons = styled.img`
  width: 25px;
  height: 25px;
`;
