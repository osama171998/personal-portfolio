import React, { useState } from "react";
import NavBar from "./assets/navbar.png";
import Close from "./assets/close.png";
import * as Styled from "./style";
import { navBarItems } from "../navitems";
import UpwardArrow from "./assets/upward-arrow.png";
import Sun from "./assets/sun.png";
import Moon from "./assets/moon.png";
import { StateContext } from "../../../context/index";
import { colorShades } from "../../utils/colorShades";

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
  const { state, setState } = React.useContext(StateContext);
  const toggleMode = () => {
    setState({
      ...state,
      darkMode: !state.darkMode,
    });
    let parentNode = document.getElementById("root");
    if (!state.darkMode) {
      parentNode.style.background = colorShades.black;
      parentNode.style.color = colorShades.grey;
    } else {
      parentNode.style.background = colorShades.grey;
      parentNode.style.color = colorShades.black;
    }
  };
  return (
    <Styled.Conatiner bgColor={bgColor} darkMode={state.darkMode}>
      <Styled.NavBarIcon src={NavBar} onClick={switchToggle} />
      {toggle ? (
        <Styled.BackgroundContainer>
          <Styled.NavItemContainer darkMode={state.darkMode}>
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
      {
        <Styled.DarkModeIcons
          src={state.darkMode ? Moon : Sun}
          alt="DarkMode"
          onClick={toggleMode}
        />
      }
      {bgColor && !toggle ? (
        <Styled.ScrollTopContainer onClick={() => window.scrollTo(0, 0)}>
          <Styled.UpwardArrowImage src={UpwardArrow} alt="Up" />
        </Styled.ScrollTopContainer>
      ) : null}
    </Styled.Conatiner>
  );
}

export default MobileNavBar;
