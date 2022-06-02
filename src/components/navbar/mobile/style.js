import styled from "styled-components";
import { colorShades } from "../../utils/colorShades";
export const Conatiner = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 1rem 1rem;
  z-index: 99;
  background: ${({ bgColor, darkMode }) =>
    darkMode ? colorShades.black : bgColor ? colorShades.grey : "transparent"};
`;

export const NavBarIcon = styled.img`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.3); */
  /* background-color: red; */
  height: 100%;
`;

export const NavItemContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  background: ${({ darkMode }) =>
    darkMode ? colorShades.black : colorShades.grey};
`;

export const CloseIcon = styled.img`
  width: 35px;
  height: 35px;
`;
export const NavInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`;
export const NavBarItems = styled.a`
  color: inherit;
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
