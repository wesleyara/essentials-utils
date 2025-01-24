import { useEffect, useState } from "react";

export const useHeight = () => {
  const [height, setHeight] = useState(0);

  const handleResize = () => setHeight(window.innerHeight);

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};
