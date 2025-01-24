import {
  backgroundColors,
  bright,
  fontColors,
  reset,
  underscore,
} from "../../utils/constants";
import { ColorLogOptions } from "./models/color-log.models";

export const colorLog = (str: string, options: ColorLogOptions) => {
  const { color, bgColor, bold, underline } = options;

  let result = "";
  if (color) {
    result += fontColors[color];
  }
  if (bgColor) {
    result += backgroundColors[bgColor];
  }
  if (bold) {
    result += bright;
  }
  if (underline) {
    result += underscore;
  }

  return `${result}${str}${reset}`;
};
