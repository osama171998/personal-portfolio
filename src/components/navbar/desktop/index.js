import React, { useState } from "react";
import * as Styled from "./style";
import { navBarItems } from "../navitems";
import UpwardArrow from "./assets/upward-arrow.png";
import { StateContext } from "../../../context/index";
import Sun from "./assets/sun.png";
import Moon from "./assets/moon.png";
import { colorShades } from "../../utils/colorShades";
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
  const { state, dispatch } = React.useContext(StateContext);

  const toggleMode = () => {
    let parentNode = document.getElementById("root");
    if (state.darkMode) {
      dispatch({ type: "DISABLE" });
      parentNode.style.background = colorShades.grey;
      parentNode.style.color = colorShades.black;
    } else {
      dispatch({ type: "ENABLE" });
      parentNode.style.background = colorShades.black;
      parentNode.style.color = colorShades.grey;
    }
  };

  return (
    <Styled.NavBarContainer bgColor={bgColor} darkMode={state.darkMode}>
      {navBarItems.map((item) => {
        return (
          <Styled.NavBarItems
            darkMode={state.darkMode}
            key={item.id}
            href={item.hash}
            className={activeIndex === item.id ? "active" : ""}
            onClick={() => handleActiveIndex(item.id)}
          >
            {item.name}
          </Styled.NavBarItems>
        );
      })}
      {
        <Styled.DarkModeIcons
          src={state.darkMode ? Moon : Sun}
          alt="DarkMode"
          onClick={toggleMode}
        />
      }
      {bgColor ? (
        <Styled.ScrollTopContainer onClick={() => window.scrollTo(0, 0)}>
          <Styled.UpwardArrowImage src={UpwardArrow} alt="Up" />
        </Styled.ScrollTopContainer>
      ) : null}
    </Styled.NavBarContainer>
  );
}

export default DesktopNavBar;
