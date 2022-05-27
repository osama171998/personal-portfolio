import styled from "styled-components";
import { colorShades } from "../../utils/colorShades";
export const Conatiner = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  padding: 1rem 0;
  z-index: 99;
  background: ${({ bgColor }) => (bgColor ? colorShades.grey : "transparent")};
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
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
`;

export const NavItemContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
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
