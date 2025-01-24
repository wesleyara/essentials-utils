import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
