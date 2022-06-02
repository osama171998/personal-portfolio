import React, { useState } from "react";
import NavBar from "../../../assets/svgs/menu.svg";
import Close from "../../../assets/pngs/close.png";
import * as Styled from "./style";
import { navBarItems } from "../navitems";
import UpwardArrow from "../../../assets/pngs/upward-arrow.png";
import Sun from "../../../assets/svgs/sun.svg";
import Moon from "../../../assets/svgs/moon.svg";
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
          src={state.darkMode ? Sun : Moon}
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
