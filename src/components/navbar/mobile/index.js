import React, { useState } from "react";
import NavBar from "./assets/navbar.png";
import Close from "./assets/close.png";
import * as Styled from "./style";
import { navBarItems } from "../navitems";
import UpwardArrow from "./assets/upward-arrow.png";
function MobileNavBar() {
  const [toggle, setToggle] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const switchToggle = () => {
    setToggle(!toggle);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  });
  return (
    <Styled.Conatiner bgColor={bgColor}>
      <Styled.NavBarIcon src={NavBar} onClick={switchToggle} />
      {toggle ? (
        <Styled.BackgroundContainer>
          <Styled.NavItemContainer>
            <Styled.CloseIcon src={Close} onClick={switchToggle} />
            <Styled.NavInnerContainer>
              {navBarItems.map((item) => {
                return (
                  <Styled.NavBarItems
                    key={item.id}
                    href={item.hash}
                    onClick={() => switchToggle()}
                  >
                    {item.name}
                  </Styled.NavBarItems>
                );
              })}
            </Styled.NavInnerContainer>
          </Styled.NavItemContainer>
        </Styled.BackgroundContainer>
      ) : null}
      {bgColor && !toggle ? (
        <Styled.ScrollTopContainer onClick={() => window.scrollTo(0, 0)}>
          <Styled.UpwardArrowImage src={UpwardArrow} alt="Up" />
        </Styled.ScrollTopContainer>
      ) : null}
    </Styled.Conatiner>
  );
}

export default MobileNavBar;
