import styled from "styled-components";
import { colorShades } from "../utils/colorShades";
export const FormContainer = styled.div`
  width: 90%;
  label {
    color: ${({ darkMode }) =>
      darkMode ? colorShades.grey : colorShades.black} !important;
  }
`;
