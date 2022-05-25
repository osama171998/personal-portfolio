import React from "react";
import { DesktopNavBar, MobileNavBar, Intro, Services } from "./components";
import * as Styled from "./app.styles";
import useWindowSize from "./hooks/useWindowSize";
function App() {
  const { isMobile } = useWindowSize();
  const NavBar = isMobile ? MobileNavBar : DesktopNavBar;
  return (
    <div>
      <Styled.WrapContainer>
        <NavBar />
        <Intro />
      </Styled.WrapContainer>
      <Services />
    </div>
  );
}

export default App;
