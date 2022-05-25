import React, { useState } from "react";
import * as Styled from "./style";
import { navBarItems } from "../navitems";

function DesktopNavBar() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <Styled.NavBarContainer>
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
    </Styled.NavBarContainer>
  );
}

export default DesktopNavBar;
