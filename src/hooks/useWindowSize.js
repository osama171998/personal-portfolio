import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: null,
    height: null,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const getWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    getWindowSize();
    window.addEventListener("resize", getWindowSize);
    // window.addEventListener("load", getWindowSize);
    return () => {
      window.removeEventListener("resize", getWindowSize);
      // window.removeEventListener("load", getWindowSize);
    };
  }, []);

  return { windowSize, isMobile };
};
export default useWindowSize;
