import { useState } from "react";

export const useToggle = (initialValue: boolean) => {
  const [toggleValue, setToggleValue] = useState(initialValue);

  const handleToggleValue = () => {
    setToggleValue(state => !state);
  };

  return {
    toggleValue,
    handleToggleValue,
  };
};
