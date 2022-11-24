import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  // Scroll to top of page every time url pathname changes
  useEffect(() => {
    window.scroll(
      {
        top: 0,
        left: 0,
      },
      [pathname]
    );
  });
  return null;
};

export default ScrollTop;
