import React from "react";
import * as Styled from "./style";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Styled.MainContainer>
      {year} &copy; All Right Reserved
    </Styled.MainContainer>
  );
};
export default Footer;
