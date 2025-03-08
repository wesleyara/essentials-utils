import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const updateMouse = (e: MouseEvent) => {
    setX(e.pageX);
    setY(e.pageY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  });

  return { x, y };
};
