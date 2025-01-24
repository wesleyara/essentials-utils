import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => setScroll(window.pageYOffset);

  useEffect(() => {
    setScroll(window.pageYOffset);
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
};
