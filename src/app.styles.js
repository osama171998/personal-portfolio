import styled from "styled-components";
import { colorShades } from "./components/utils/colorShades";
export const MainContainer = styled.div`
  background-color: ${({ darkMode }) =>
    darkMode ? colorShades.black : colorShades.grey};
  color: ${({ darkMode }) =>
    !darkMode ? colorShades.black : colorShades.grey};
`;
export const WrapContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
`;
