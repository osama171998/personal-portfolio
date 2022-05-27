import React, { useEffect } from "react";
import {
  DesktopNavBar,
  MobileNavBar,
  Intro,
  Services,
  AboutMe,
  WorkHistory,
} from "./components";
import * as Styled from "./app.styles";
import useWindowSize from "./hooks/useWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const { isMobile } = useWindowSize();
  const NavBar = isMobile ? MobileNavBar : DesktopNavBar;
  console.log(isMobile);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <Styled.WrapContainer>
        <NavBar />
        <Intro />
      </Styled.WrapContainer>
      <Services />
      <AboutMe />
      <WorkHistory />
    </div>
  );
}

export default App;
