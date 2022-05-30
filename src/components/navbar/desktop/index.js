import React, { useState } from "react";
import * as Styled from "./style";
import { navBarItems } from "../navitems";
import UpwardArrow from "./assets/upward-arrow.png";
function DesktopNavBar() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [bgColor, setBgColor] = useState(false);
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  });
  return (
    <Styled.NavBarContainer bgColor={bgColor}>
      {navBarItems.map((item) => {
        return (
          <Styled.NavBarItems
            key={item.id}
            href={item.hash}
            className={activeIndex === item.id ? "active" : ""}
            onClick={() => handleActiveIndex(item.id)}
          >
            {item.name}
          </Styled.NavBarItems>
        );
      })}
      {bgColor ? (
        <Styled.ScrollTopContainer onClick={() => window.scrollTo(0, 0)}>
          <Styled.UpwardArrowImage src={UpwardArrow} alt="Up" />
        </Styled.ScrollTopContainer>
      ) : null}
    </Styled.NavBarContainer>
  );
}

export default DesktopNavBar;
