import React, { useState } from "react";
import NavBar from "./assets/navbar.png";
import Close from "./assets/close.png";
import * as Styled from "./style";
import { navBarItems } from "../navitems";
function MobileNavBar() {
  const [toggle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Styled.Conatiner>
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
                    href={item.href}
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
    </Styled.Conatiner>
  );
}

export default MobileNavBar;
