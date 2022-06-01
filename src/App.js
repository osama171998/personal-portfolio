import React, { useEffect } from "react";
import {
  DesktopNavBar,
  MobileNavBar,
  Intro,
  Services,
  AboutMe,
  WorkHistory,
  // ContactMe,
  Footer,
} from "./components";
import * as Styled from "./app.styles";
import useWindowSize from "./hooks/useWindowSize";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/antd.css";
import ContextProvider from "./context/index";
function App() {
  const { isMobile } = useWindowSize();
  const NavBar = isMobile ? MobileNavBar : DesktopNavBar;
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
      <ContextProvider>
        <Styled.WrapContainer>
          <NavBar />
          <Intro />
        </Styled.WrapContainer>
        <Services />
        <AboutMe />
        <WorkHistory />
        {/* <ContactMe /> */}
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
